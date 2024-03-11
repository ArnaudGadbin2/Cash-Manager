import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { type NestApplicationOptions, ValidationPipe } from '@nestjs/common'
// import * as passport from 'passport'
import helmet from 'helmet'

import { FSWatcher } from 'chokidar'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { isProduction } from './constants'

declare const module: any

async function bootstrap () {
  let options: NestApplicationOptions | undefined

  const domainName = process.env.DOMAIN_NAME

  const certificateFolder = `/home/certbot/live/${domainName}`

  // if (!isDebug()) {
  //   console.log('Setting up the ssl certificate ...')
  //
  //   const certificateFilePathPrivKey = `${certificateFolder}/privkey.pem`
  //   const certificateFilePathFullChain = `${certificateFolder}/fullchain.pem`
  //
  //   const privateKey = fs.readFileSync(certificateFilePathPrivKey)
  //   const fullchain = fs.readFileSync(certificateFilePathFullChain)
  //   console.log(`Domain used is : ${domainName}`)
  //   options = {
  //     httpsOptions: {
  //       key: privateKey,
  //       cert: fullchain
  //     }
  //   }
  // }
  const app = await NestFactory.create(AppModule, options)

  const config = new DocumentBuilder()
    .setTitle('Cash Manager Rest API')
    .setDescription('Rest Api part of the cash manager application')
    .setVersion('1.0')
    .addTag('auth')
    .addBearerAuth()
    .addServer('http://localhost:8080/api')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/auth', app, document)

  if (isProduction()) {
    const watcher = new FSWatcher()
    watcher.add(certificateFolder)
    watcher.on('ready', () => {
      console.log(`Ready to watch : ${certificateFolder}`)
    })
    let isRestartingApp = false
    watcher.on('change', async (path, stats) => {
      if (isRestartingApp) return
      isRestartingApp = true
      watcher.close()
      // Redémarrez votre application ici
      if (stats) {
        console.log(`Stats change ${path}...`)
      }
      console.log(`Le fichier ${path} a été modifié. Redémarrage de l\'application...`)

      // Exécutez votre logique de redémarrage de l'application
      await app.close()
      console.log('Application close ...')
      console.log('Restarting')
      await bootstrap()
    })
  }

  const PORT = 8080

  const domainsFromEnv = process.env.CORS_ORIGIN || '*'

  const whitelist = domainsFromEnv.split(',').map(item => item.trim())

  // creating corsoptions with whitelist
  // CORS_ORIGIN var in .env
  const corsOptions = {
    origin (origin, callback) {
      if (!origin || whitelist.includes('*') || whitelist.includes(origin)) {
        callback(null, true)
      }
      else {
        callback(new Error(`Not allowed by CORS, origin: ${origin}`))
      }
    }
  }

  app.setGlobalPrefix('api')
  app.enableCors(corsOptions)
  app.use(helmet.crossOriginResourcePolicy())
  app.use(helmet.dnsPrefetchControl())
  app.use(helmet.expectCt())
  app.use(helmet.frameguard())
  app.use(helmet.hidePoweredBy())
  app.use(helmet.hsts())
  app.use(helmet.ieNoOpen())
  app.use(helmet.noSniff())
  app.use(helmet.originAgentCluster())
  app.use(helmet.permittedCrossDomainPolicies())
  app.use(helmet.referrerPolicy())
  app.use(helmet.xssFilter())
  app.useGlobalPipes(new ValidationPipe())
  // app.use(passport.initialize())

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }

  await app.listen(PORT, async () => {
    console.log(`Running on domain ${await app.getUrl()}`)
    console.log(`Running on port ${PORT}`)
  })
}
bootstrap()

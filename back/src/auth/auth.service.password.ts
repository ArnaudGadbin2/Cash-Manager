import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'
import axios from 'axios'
import type { Request, Response } from 'express'
export const prisma = new PrismaClient()

@Injectable()
export class AuthServicePassword {
  constructor () {}

  async sendResetEmail (
    req: Request,
    oneTimePassword: string,
    res: Response
  ) {
    const { email } = (req.body as any)
    const user = await prisma.user.findUnique({
      where: { email },
      include: { providers: true }
    })
    if (!user) {
      res.json({ success: true, message: 'Email envoyé à l\'adresse mail spécifiée' })
      res.end()
      return null
    }
    const frontUrl = req.headers.origin
    const emailToSend = {
      sender: { email: process.env.OWNER_EMAIL },
      to: [{ email }],
      // Customize Email content
      subject: 'Réinitialisation mot de passe - Arnaud',
      htmlContent: `
     <html>
       <body>
         <p>M./Mme,</p>
         <p>Votre demande de réinitialisation de mot de passe a été prise en compte.</p>
         <p>Merci de suivre le lien ci-dessous pour compléter le processus:</p>
         <p>${frontUrl}/nouveaumotdepasse?otp=${oneTimePassword}</p>
         <p>Bien Cordialement,</p>
         <p>Arnaud</p>
       </body>
     </html>`
    }
    try {
      await axios.post('https://api.sendinblue.com/v3/smtp/email',
        emailToSend,
        {
          headers: {
            'Accept': 'application/json',
            'api-key': process.env.SENDINBLUE_KEY
          }
        })
      prisma.user.update({
        where: { id: user.id },
        data: {
          oneTimePassword
        }
      })
      res.json({ success: true, message: 'Email envoyé à l\'adresse mail spécifiée' })
    }
    catch (error) {
      res.json({ success: true, message: 'Email envoyé à l\'adresse mail spécifiée' })
      res.end()
      throw new Error(error as any)
    }
  }

  async resetPasswordForgot (
    password: string,
    oneTimePassword: string,
    res: Response
  ) {
    const user = await prisma.user.findFirst({
      where: { oneTimePassword }
    })

    if (!user) {
      res.json({ success: false, message: 'Action invalide' })
      res.end()
      throw new Error('Action invalide')
    }

    // write new password and delete oneTimePassword
    const hash = bcrypt.hashSync (password)
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hash,
        oneTimePassword: null
      }
    })
    res.json({ success: true, message: 'Mot de passe modifié' })
    res.end()
  }

  async resetPasswordIntentional (
    newPassword: string,
    email: string,
    oldPassword: string,
    res: Response
  ) {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      res.json({ success: false, message: 'Action invalide' })
      res.end()
      return null
    }

    // Comparison between old password fields and db password
    const isSamePassword = bcrypt.compareSync(oldPassword, user.password)
    // Bad password
    if (isSamePassword) {
      const hash = bcrypt.hashSync(newPassword)
      await prisma.user.update({
        where: { id: user.id },
        data: {
          password: hash
        }
      })
      res.json({ success: true, message: 'Mot de passe modifié' })
      res.end()
    }
    // Right password
    else {
      res.json({ success: false, message: 'Action invalide' })
      res.end()
    }
  }
}

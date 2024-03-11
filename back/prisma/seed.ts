import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const product = await prisma.product.findUnique({ where: { id: 1 } })
  console.log(product)
  if (!product) {
    await prisma.product.create({
      data: {
        id: 1,
        createdBy: "System",
        title: 'Lamborghini Aventador',
        description: `Longueur	4,79 m
      Largeur sans rétros	2,03 m
      Hauteur	1,13 m
      Empattement	2,70 m
      Volume de coffre mini/maxi	NC / NC
      Nombre de portes	2
      Nombre de places assises	2
      Poids à vide	1 575 kg`,
        photo: "https://images.caradisiac.com/logos-ref/modele/modele--lamborghini-aventador/S0-modele--lamborghini-aventador.jpg",
        price: 338
      }
    })
    await prisma.product.create({
      data: {
        id: 2,
        createdBy: "System",
        title: 'Lamborghini Centenario',
        description: `En préCommande`,
        photo: "https://images.caradisiac.com/logos/6/7/3/8/196738/S7-photos-du-jour-lamborghini-centenario-114211.jpg",
        price: 50
      }
    })
    await prisma.product.create({
      data: {
        id: 3,
        createdBy: "System",
        title: 'Lamborghini Huracan',
        description: `Commercialisé : depuis 2014
        Prix : de 180 000 € à 358 699 €
        Motorisation : Essence
        Emission de CO2 : 290 g/km*`,
        photo: "https://images.caradisiac.com/logos-ref/modele/modele--lamborghini-huracan/S7-modele--lamborghini-huracan.jpg",
        price: 338
      }
    })
    await prisma.product.create({
      data: {
        id: 4,
        createdBy: "System",
        title: 'Lamborghini Revuelto',
        description: `Commercialisé : depuis 2023
        Prix : 506 808 €
        Motorisation : Hybride essence électrique`,
        photo: "https://images.caradisiac.com/logos-ref/modele/modele--lamborghini-revuelto/S7-modele--lamborghini-revuelto.jpg",
        price: 5
      }
    })
    await prisma.product.create({
      data: {
        id: 5,
        createdBy: "System",
        title: 'Lamborghini Sian',
        description: `Commercialisé : depuis 2020
        Prix non communiqué...
        Motorisation : Hybride essence électrique`,
        photo: "https://images.caradisiac.com/logos-ref/modele/modele--lamborghini-sian/S7-modele--lamborghini-sian.jpg",
        price: 12
      }
    })
    await prisma.product.create({
      data: {
        id: 6,
        createdBy: "System",
        title: 'Lamborghini Urus',
        description: `Commercialisé : depuis 2018
        Prix : de 212 415 € à 267 428 €
        Motorisation : Essence
        Emission de CO2 :
        Norme NEDC`,
        photo: "https://images.caradisiac.com/logos-ref/modele/modele--lamborghini-urus/S7-modele--lamborghini-urus.jpg",
        price: 22
      }
    })
    await prisma.product.create({
      data: {
        id: 7,
        createdBy: "System",
        title: 'Lamborghini Gallardo',
        description: `Commercialisé : de 2003 à 2014
        Prix : Voir la cote en occasion
        Motorisation : Essence
        Emission de CO2:
        Norme NEDC`,
        photo: "https://images.caradisiac.com/logos-ref/modele/modele--lamborghini-gallardo/S7-modele--lamborghini-gallardo.jpg",
        price: 15
      }
    })
  }
}
main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
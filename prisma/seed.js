import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  // Create 10 shops, each with 5 masseuses
  for (let i = 1; i <= 10; i++) {
    const shop = await prisma.shop.create({
      data: {
        name: `Shop ${i}`,
        address: `123 Main Street #${i}`,
        tel: `090000000${i}`,
        openTime: new Date(`2025-01-01T09:00:00.000Z`),
        closeTime: new Date(`2025-01-01T21:00:00.000Z`),
      },
    })

    for (let j = 1; j <= 5; j++) {
      await prisma.masseuse.create({
        data: {
          name: `Masseuse ${j} of Shop ${i}`,
          shopId: shop.id,
        },
      })
    }
  }
}

main()
  .then(() => {
    console.log('Seeding complete 🚀')
    return prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
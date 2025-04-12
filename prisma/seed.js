import prisma from '../prismaClient.js';

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Wiroj',
            email: 'wiroj@email.com',
            tel: '191',
            password: 'iamwiroj',
        },
    });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect;
    })
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const game = await prisma.category.upsert({
        where: { slug: "game" },
        update: {},
        create: {
            slug: "game",
            name: "ゲーム",
        },
    });
    const it = await prisma.category.upsert({
        where: { slug: "it" },
        update: {},
        create: {
            slug: "it",
            name: "IT",
        },
    });
    const cg = await prisma.category.upsert({
        where: { slug: "cg_anime" },
        update: {},
        create: {
            slug: "cg_anime",
            name: "CG・アニメ",
        },
    });
    const music = await prisma.category.upsert({
        where: { slug: "music" },
        update: {},
        create: {
            slug: "music",
            name: "ミュージック",
        },
    });

    const car = await prisma.category.upsert({
        where: { slug: "car" },
        update: {},
        create: {
            slug: "car",
            name: "カーデザイン",
        },
    });

    const qualification = await prisma.category.upsert({
        where: { slug: "qualification" },
        update: {},
        create: {
            slug: "qualification",
            name: "資格試験",
        },
    });

    const job = await prisma.category.upsert({
        where: { slug: "job" },
        update: {},
        create: {
            slug: "job",
            name: "就活",
        },
    });

    console.log({ game, it, cg, music, car, qualification, job });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

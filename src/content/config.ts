import {defineCollection, z} from 'astro:content';

const historia = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        founded: z.number(),
        author: z.string(),
    }),
})



const menu = defineCollection({
    schema: z.object({
        title: z.string(),
        price: z.number(),
        tag: z.string(),
        stars: z.number().min(1).max(5),
        image: z.string(),
        popularity: z.number().min(1).max(10),
    }),
})

export const collections = {historia, menu }
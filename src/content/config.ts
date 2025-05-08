import { defineCollection, z } from 'astro:content';

// Define the schema for the menu items collection
const menuCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Entradas', 'Charolas', 'Arroces', 'Naturales', 'Empanizados', 'Horneados', 'Bebidas', 'Extras']),
    price: z.number(),
    description: z.string(),
    image: z.string().optional(),
    vegetarian: z.boolean().default(false),
    vegan: z.boolean().default(false),
    glutenFree: z.boolean().default(false),
    spicyLevel: z.number().min(0).max(3).optional(),
    published: z.boolean().default(true),
  }),
});

// Define the schema for the specials collection
const specialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    description: z.string(),
    price: z.number().optional(),
    regularPrice: z.number().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// Define the schema for the hours json file
const hoursSchema = z.object({
  hours: z.array(
    z.object({
      day: z.string(),
      open: z.string(),
      close: z.string(),
      closed: z.boolean().default(false),
    })
  ),
});

// Define the schema for the contact json file
const contactSchema = z.object({
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  phone: z.string(),
  email: z.string(),
  mapUrl: z.string().optional(),
});

// Export the collections
export const collections = {
  'menu': menuCollection,
  'specials': specialsCollection,
};

// Export the JSON schemas (these will be used when importing the data)
export { hoursSchema, contactSchema };
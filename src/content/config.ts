import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    code: z.string(),
    title: z.string(),
    shortTitle: z.string(),
    domain: z.string(),
    projectContext: z.string(),
    workMode: z.string(),
    myRoleSummary: z.string(),
    priority: z.boolean().default(false),
    // Champs de présentation pour les cartes de la homepage et l'index /projets/
    featured: z.boolean().default(false),
    cardTitle: z.string().optional(),
    cardContext: z.string().optional(),
    cardRole: z.string().optional(),
    cardTech: z.array(z.string()).max(4).optional(),
    summary: z.string(),
    technologies: z.array(z.string()),
    highlights: z.array(z.string()),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          detail: z.string().optional(),
        })
      )
      .optional(),
    architectureSteps: z.array(
      z.object({
        step: z.string(),
        title: z.string(),
        description: z.string(),
        tag: z.string().optional(),
      })
    ),
    repositoryUrl: z.string().nullable().default(null),
    demoUrl: z.string().nullable().default(null),
    repositoryStatusNote: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};

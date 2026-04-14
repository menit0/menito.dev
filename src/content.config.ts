import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { defineCollection } from "astro/content/config";

const resumeCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/resume" }),
  schema: z.object({
    summary: z.object({
      name: z.string(),
      title: z.string(),
      description: z.string(),
      links: z.array(
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      ),
    }),
    work: z.object({
      name: z.string(),
      experiences: z.array(
        z.object({
          title: z.string(),
          date: z.string(),
          place: z.object({
            name: z.string(),
            url: z.string(),
          }),
          icon: z.string(),
          description: z.string(),
        }),
      ),
    }),
    education: z.object({
      name: z.string(),
      experiences: z.array(
        z.object({
          title: z.string(),
          date: z.string(),
          place: z.object({
            name: z.string(),
            url: z.string(),
          }),
          icon: z.string(),
        }),
      ),
    }),
    skills: z.object({
      name: z.string(),
      items: z.array(z.string()),
    }),
    mainProjects: z.object({
      name: z.string(),
      projects: z.array(
        z.object({
          name: z.string(),
          thumbnail: z.string(),
          url: z.string(),
          date: z.string(),
          description: z.string(),
          skills: z.array(z.string()),
        }),
      ),
    }),
    sideProjects: z.object({
      name: z.string(),
      projects: z.array(
        z.object({
          name: z.string(),
          thumbnail: z.string(),
          url: z.string(),
          date: z.string(),
          description: z.string(),
          skills: z.array(z.string()),
        }),
      ),
    }),
  }),
});

export const collections = {
  resume: resumeCollection,
};

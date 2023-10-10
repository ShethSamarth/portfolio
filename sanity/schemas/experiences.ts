import { defineField, defineType } from "sanity"

export default defineType({
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "dateStarted",
      title: "Date Started",
      type: "date",
    }),
    defineField({
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "Is Currently Working Here ?",
      type: "boolean",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
})

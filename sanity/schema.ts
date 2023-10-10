import { type SchemaTypeDefinition } from "sanity"

import experiences from "./schemas/experiences"
import pageInfo from "./schemas/pageInfo"
import projects from "./schemas/projects"
import skills from "./schemas/skills"
import socials from "./schemas/socials"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experiences, pageInfo, projects, skills, socials],
}

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"
import { myTheme } from "./theme"

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "Samarth Sheth - Portfolio",
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  theme: myTheme,
})

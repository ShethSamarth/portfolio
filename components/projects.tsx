"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { urlFor } from "@/sanity/lib/urlFor"

interface ProjectsProps {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[90vh] sm:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 md:p-44 h-screen"
          >
            <Link href={project.link} target="_blank">
              <Image
                src={urlFor(project.image).url()}
                alt={project.image.alt}
                width={1000}
                height={1000}
                className="h-64 w-72 md:h-64 md:w-auto object-contain hover:scale-110 duration-300 ease-in-out"
              />
            </Link>

            <div className="space-y-2 sm:space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                {i + 1} of {projects.length} : {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-10 w-10 rounded-full object-contain"
                    height={40}
                    width={40}
                    src={urlFor(technology?.image).url()}
                    alt={technology.image.alt}
                  />
                ))}
              </div>

              <p className="text-xs sm:text-md md:text-lg md:text-left text-justify">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[15%] md:top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects

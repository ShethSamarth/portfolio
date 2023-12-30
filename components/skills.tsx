"use client"

import { motion } from "framer-motion"

import SkillCard from "@/components/ui/skill-card"

type SkillsProps = {
  skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 md:top-20 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-5 mt-20 sm:mt-0">
        {skills?.map((skill, i) => (
          <SkillCard
            key={skill._id}
            skill={skill}
            directionLeft={i % 2 ? false : true}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills

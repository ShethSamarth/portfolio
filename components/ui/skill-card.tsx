"use client"

import { motion } from "framer-motion"

type SkillCardProps = {
  skill: Skill
  directionLeft?: boolean
}

const SkillCard = ({ skill, directionLeft }: SkillCardProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={skill.imageUrl}
        alt={skill.image.alt}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover h-16 w-16 sm:h-20 sm:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard

"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { urlFor } from "@/sanity/lib/urlFor"

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[80vw] md:w-[500px] snap-center bg-[#292929] py-5 overflow-hidden opacity-100 md:opacity-50 md:hover:opacity-100 transition-opacity duration-200">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience.companyImage.alt}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-2xl font-light text-center w-[80%] mx-auto">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1 text-center overflow-hidden w-[80%] mx-auto">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2 justify-center">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="h-7 w-7 rounded-full object-contain"
              src={urlFor(technology?.image).url()}
              alt={technology.image.alt}
              width={30}
              height={30}
            />
          ))}
        </div>
        <p className="uppercase py-2 text-gray-300 text-xs sm:text-sm md:text-base text-center">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc mt-5 space-y-2 text-xs sm:text-sm md:text-lg ml-5">
          {experience.points.map((point, i) => (
            <li key={i} className="w-[90%] md:w-full mx-auto md:mx-0">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard

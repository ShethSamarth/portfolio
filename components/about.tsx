"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDownIcon, ArrowPathIcon } from "@heroicons/react/24/solid"

import { urlFor } from "@/sanity/lib/urlFor"

interface AboutProps {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: AboutProps) => {
  const [loading, setLoading] = useState(false)

  const download = () => {
    setLoading(true)
    fetch(pageInfo.resumeUrl).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement("a")
        alink.href = fileURL
        alink.download = "Samarth Sheth - Resume.pdf"
        alink.click()
        alink.remove()
        setLoading(false)
      })
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg lg:w-96 md:w-72 md:h-96 md:ml-24"
        alt={pageInfo.profilePic.alt}
      />

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="space-y-2 md:space-y-10 px-0 md:px-10"
      >
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a little background
        </h4>
        <p className="text-sm sm:text-lg text-justify">
          {pageInfo.backgroundInformation}
        </p>
        <button
          onClick={download}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {loading ? (
            <ArrowPathIcon className="h-5 w-5 mr-3 animate-spin" />
          ) : (
            <ArrowDownIcon className="h-5 w-5 mr-3" />
          )}
          Download Resume
        </button>
      </motion.div>
    </motion.div>
  )
}

export default About

"use client"

import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
import { EnvelopeIcon } from "@heroicons/react/24/solid"

interface HeaderProps {
  socials: Social[]
}

const Header = ({ socials }: HeaderProps) => {
  return (
    <header className="sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 items-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -500 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.5, x: 500 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2"
      >
        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.a>
    </header>
  )
}

export default Header

"use client"

import Link from "next/link"
import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter"

import { urlFor } from "@/sanity/lib/urlFor"
import BackgroundCircles from "@/components/ui/background-circles"

interface HeroProps {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: HeroProps) => {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo.name}`,
      "Guy-who-Loves-Coding.tsx",
      "<WebDeveloper />",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        height={200}
        width={200}
        src={urlFor(pageInfo.heroImage).url()}
        alt={pageInfo.heroImage.alt}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about" className="heroButton">
            About
          </Link>
          <Link href="#experience" className="heroButton">
            Experience
          </Link>
          <Link href="#skills" className="heroButton">
            Skills
          </Link>
          <Link href="#projects" className="heroButton">
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

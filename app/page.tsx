import Link from "next/link"
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Projects from "@/components/projects"
import Experiences from "@/components/experiences"

export const revalidate = 500

const HomePage = async () => {
  const socialsQuery = groq`*[_type == "socials"] | order(_createdAt asc)`
  const socials: Social[] = await client.fetch(socialsQuery)

  const pageInfoQuery = groq`*[_type == "pageInfo"] [0] {..., "resumeUrl": resume.asset->url}`
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery)

  const experiencesQuery = groq`*[_type == "experiences"] {..., technologies[]->} | order(_createdAt desc)`
  const experiences: Experience[] = await client.fetch(experiencesQuery)

  const skillsQuery = groq`*[_type == "skills"] {..., "imageUrl": image.asset->url} | order(_createdAt desc)`
  const skills: Skill[] = await client.fetch(skillsQuery)

  const projectsQuery = groq`*[_type == "projects"] {..., technologies[]->} | order(_createdAt desc)`
  const projects: Project[] = await client.fetch(projectsQuery)

  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experiences experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>
      <footer className="sticky bottom-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10">
        <Link href="#hero" className="w-10">
          <ArrowUpCircleIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 text-[#F7AB0A]" />
        </Link>
      </footer>
    </div>
  )
}

export default HomePage

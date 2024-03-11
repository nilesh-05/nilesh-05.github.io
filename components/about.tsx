"use client"
import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
    initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.3}}
    className='max-w-[45rem] text-center leading-8'>
        <SectionHeading heading={"About Me"}/>
        <p className='mb-3 '>
            An <strong>SDE-1 at <span className='underline'><Link target='_blank' href="https://www.guenstiger.de">guenstiger.de</Link></span></strong> with a passion for crafting efficient, responsive web applications. 
            Specializing in <strong>Node.js</strong> and <strong>JavaScript</strong>, I optimize server-side operations and implement engaging user interfaces. 
            Proficient in <strong>Next.js</strong>, <strong>Serverless</strong>, <strong>React</strong>, <strong>Recoil</strong>, <strong>Sass</strong>, and <strong>Git</strong>, I&apos;m eager to learn and adapt to new technologies.
            Currently, I am <strong>learning TypeScript</strong> and <strong>Prisma ORM</strong> alongside <strong>PostgreSQL</strong>. 
        </p>
        <p>
            When I&apos;m not coding, I like to play basketball and take a lot of sleep. I also enjoy learning new things.
            Right now, I am learning how I can improve my sleep quality 💤.
        </p>
    </motion.section>
  )
}

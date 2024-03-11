"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import nileshImg from "@/public/nileshImg.jpg"
import { motion } from 'framer-motion'
import { BsArrowRight, BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs'

export default function Intro() {
    return (
        <section className='max-w-[50rem] text-center'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}>
                        <Image src={nileshImg} alt="Nilesh's Image" width={192} height={192} priority={true} quality={100}
                            className='h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl rounded-full' />
                    </motion.div>
                    <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 150, delay: 0.1, duration: 0.7 }}
                        className='absolute text-3xl bottom-0 right-0 cursor-default'>👋🏼</motion.span>
                </div>
            </div>
            <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ opacity: 1, y: 0 }} className='mb-10 mt-10 px-4 !leading-[1.5]'>
                <span className='text-3xl font-bold sm:text-4xl mb-[5px] block'>I'm Nilesh.</span>
                <br></br>
                <span>
                    I am a full stack developer with 2 years of experience. I enjoy building sites and apps.
                    My main focus for this year is mastering Typescript and Prisma ORM.
                </span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className='flex flex-col sm:flex-row items-center gap-3 px-4 text-lg font-medium justify-center'>
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 transition shadow-md shadow-black/[0.1]'>
                    Contact Me <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
                </Link>
                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition cursor-pointer border border-black/10 shadow-md shadow-black/[0.1]'
                    href='https://drive.google.com/file/d/1uGNuBnNVMMwDkmZSRi5GpYHwjHAwWX5s/view' target='_blank'>
                    Resume <BsDownload className='text-gray-700 group-hover:text-gray-950 transition' />
                </a>
                <div className='flex gap-3 sm:flex-row'>
                    <a href='https://www.linkedin.com/in/nileshsharma56/' className='group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer hover:text-gray-950 hover:scale-110 transition border border-black/10 shadow-md shadow-black/[0.1]'>
                        <BsLinkedin className='group-hover:text-gray-950 transition'/>
                    </a>
                    <a href='https://github.com/nilesh-05' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer hover:text-gray-950 hover:scale-110 transition border border-black/10 shadow-md shadow-black/[0.1]'>
                        <BsGithub />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
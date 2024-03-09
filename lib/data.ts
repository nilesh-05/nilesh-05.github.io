import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/next.svg";
import rmtdevImg from "@/public/next.svg";
import wordanalyticsImg from "@/public/next.svg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Software Engineer",
        location: "Gurugram, India",
        description:
            "Test Desc",
        icon: React.createElement(LuGraduationCap),
        date: "June, 2023",
    },
    {
        title: "Software Engineer Intern",
        location: "Gurugram, India",
        description:
            "Test Desc",
        icon: React.createElement(CgWorkAlt),
        date: "March, 2021 - June, 2023",
    }
] as const;

export const projectsData = [
    {
        title: "Project 1",
        description:
            "Desc 1",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Project 2",
        description:
            "Desc 2",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Project 3",
        description:
            "Desc 3",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Recoil",
    "GraphQL",
    "Apollo",
    "Express",
    "Framer Motion",
] as const;
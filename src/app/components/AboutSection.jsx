"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>JavaScript / TypeScript</li>
        <li>Python</li>
        <li>Node.js & Express.js</li>
        <li>React.js & Next.js</li>
        <li>FastAPI</li>
        <li>PostgreSQL & MongoDB</li>
        <li>Docker</li>
        <li>AWS (S3)</li>
        <li>Git & CI/CD</li>
        <li>System Design, OS, DBMS, CN, OOP (Java)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Tech, Computer Science and Engineering – Birla Institute of
          Technology, Mesra (CGPA: 8.60, 2022–Present)
        </li>
        <li>
          Senior Secondary – St. Xavier’s School, Jaipur (89.8%, 2021)
        </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Expert on Codeforces (Rating: 1622), Rank 1685 in Div. 2</li>
        <li>1000+ problems solved across coding platforms</li>
        <li>G.P. Birla Scholarship (Top 0.1% among 5000 students)</li>
        <li>1st place in 24-hr IEEE Hackathon, BIT Mesra</li>
        <li>State-level Badminton Player, NCC ‘A’ Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="Sudhanshu Pandey"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate full-stack developer and competitive programmer
            with expertise in building scalable web applications and automation
            tools. Recently completed my Summer Internship at Texas Instruments.
             My experience spans from developing SaaS products and
            AI-powered solutions to architecting microservices and optimizing
            system workflows. With strong foundations in C++, JavaScript, and
            system design, I thrive on solving complex problems, delivering
            impactful solutions, and working in collaborative, high-energy
            environments.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              Achievements
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

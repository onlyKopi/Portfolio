"use client";
import myResume from './assets/resumePic.jpg';
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Mail, Github, ArrowRight } from 'lucide-react';


const data = {
  name: "Eliseo Cruz",
  location: "Quezon City, Philippines",
  title: "Full-Stack Developer & Student",
  about:
    "I am a 2nd-year BSIT student with hands-on experience in full-stack web development using React and ASP.NET Core. I enjoy solving real-world problems through code and actively explore technologies like cloud computing, DevOps pipelines, and software architecture.",
  about2:
    " Using my foundation in frontend and backend development, I continuously push myself to grow through practice projects, certifications, and real-world training. I aim to become a professional full-stack developer ready to contribute to scalable systems and impactful projects.",
  about3:
    "I’m still learning and exploring new skills every day, trying to take small steps forward through hands-on projects and real-world challenges. I’m hopeful that, with time and effort, I’ll be able to contribute to meaningful and well-built software solutions.",
  certificate: [
    "Microsoft SQL Certified: IT Specialist in Database",
    "Network Security: IT Specialist in Network Security (IN PROGRESS)"
  ],
  techStack: {
    frontend: ["HTML", "CSS", "Javascript", "Typescript", "React", "TailwindCSS", "Python", "C#"],
    backend: ["ASPNET Core", "Ms SQL", "Azure Blob Storage"],
    devops: ["Docker", "Azure Devops", "Azure Pipelines"],
  },
  education: [
    {
      school: "Adamson University",
      degree: "BS in Information Technology",
      year: "2023-Present",
    },
    {
      school: "Our Lady of Fatima University",
      degree: "STEM Senior High School",
      year: "2021-2023",
    }
  ],
  experiences: [
    { role: "Full-Stack Web Developer", company: "Aldersgate Odel", year: "Feb 2025-May 2025" }
  ],
  skills: [
    "Critical Thinking",
    "Team Collaboration",
    "Time Management",
  ],
  hobbies: ["Playing Games Both Mobile & Desktop", "Improving My Skills in Technology", "Board Games That Requires Critical Thinking", "Watching Anime and Movies", "Listening to Music"],
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const baseCardClass =
    "rounded-lg p-6 transition-colors border " +
    (isDark
      ? "border-white bg-[#111111] text-white"
      : "border-gray-900 bg-white text-black");

    const handleEmailClick = () => {
  window.open('mailto:eliseocruzz07@gmail.com');
};

  return (
    <main
      className={`min-h-screen px-4 md:px-12 py-10 transition-colors ${isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="w-40 h-40 bg-gray-400 rounded-xl">
            <img src={myResume} alt="My Resume" className="w-40 h-40 rounded-xl object-cover" />
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-lg">{data.title}</p>
            <p>{data.location}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              <a href="mailto:eliseocruzz07@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button onClick={handleEmailClick}
                  className={
                    isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }
                >
                  <Mail /> Send Email <ArrowRight className="ml-1" />
                </Button>
              </a>

              <a href="https://www.facebook.com/eboy.cruz.18" target="_blank" rel="noopener noreferrer">
                <Button variant="outline"><Facebook /> Facebook</Button>
              </a>
            </div>
          </div>

          <Button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={
              isDark
                ? "rounded-full bg-gray-900 hover:bg-gray-600"
                : "rounded-full bg-gray-200 hover:bg-gray-300"
            }
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About & Certificate */}
          <section className={`${baseCardClass} md:col-span-2 md:row-span-2`}>
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <br />
            <p>{data.about}</p>
            <br />
            <p>{data.about2}</p>
            <br />
            <p>{data.about3}</p>
            <br />
          </section>

          <section className={`${baseCardClass} md:row-span-1`}>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            {data.experiences.map((exp) => (
              <div key={exp.role} className="mb-2">
                <strong>{exp.role}</strong> {exp.company}{" "}
                <span className="text-sm text-gray-400">({exp.year})</span>
              </div>
            ))}
          </section>

          <section className={`${baseCardClass} md:row-span-1`}>
            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
            {Object.entries(data.techStack).map(([area, tools]) => (
              <div key={area} className="mb-4">
                <h4 className="font-bold capitalize mb-1">{area}</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant={isDark ? "outline" : "outline"}>
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className={`${baseCardClass} md:col-span-1 md:row-span-1`}>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            {data.education.map((edu) => (
              <div key={edu.school} className="mb-2">
                <strong>{edu.school}</strong> – {edu.degree}{" "}
                <span className="text-sm text-gray-400">({edu.year})</span>
              </div>
            ))}
          </section>

          <section className={`${baseCardClass} md:col-span-2 md:row-span-2`}>
            <br />
            <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
            <ul className="list-disc list-inside">
              {data.hobbies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <br />
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <ul className="list-disc list-inside">
              {data.certificate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </section>

          <section className={`${baseCardClass} md:row-span-1`}>
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside">
              {data.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={`${baseCardClass} md:col-span-3 md:row-span-1`}>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="flex gap-2 mb-2"><Mail />eliseocruzz07@email.com</p>
            <p className="flex gap-2 mb-2"><Facebook />facebook.com/eboy.cruz.18</p>
            <p className="flex gap-2 mb-2"><Github />github.com/onlyKopi</p>
          </section>
        </div>
      </div>
    </main>
  );
}

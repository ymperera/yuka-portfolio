"use client";

import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const projects = {
    nomad: {
      title: "Nomad Mannequin",
      role: "Co-Founder",
      category: "Product & Hardware",
      image: "/images/Nomad1.png",
      link: "https://nomadmannequin.com",
      oneLine: "A full-size mannequin that collapses into a briefcase for apparel brands at trade shows.",
      problem: "Apparel brands lose sales at trade shows when buyers can't see clothes on a body. Traditional mannequins are expensive, fragile, and a pain to transport.",
      solution: "A full-size mannequin that collapses into a briefcase. Portable, affordable, practical. I owned everything: customer discovery, prototyping in the machine shop, manufacturing tradeoffs, and go-to-market. Learned how to balance user needs with real-world constraints and ship products from zero to revenue.",
      tech: "CAD, laser cutting, 3D printing, machine shop fabrication",
    },
    reelbot: {
      title: "Reel Bot",
      role: "Builder",
      category: "Growth Automation",
      image: "/images/ReelBot.MOV",
      imageType: "video" as const,
      videoSrc: "/images/ReelBot.MOV",
      oneLine: "Web scraper tracking Instagram Reels to surface emerging trends for maximum engagement.",
      problem: "Marketing Nomad on Instagram was manual and hard to scale. The biggest challenge was spotting new Reel formats early, when reach and brand visibility is the highest. This meant spending hours scrolling just to identify repeatable patterns early on before they were over-saturated.",
      solution: "A web scraper that tracks Instagram Reels: engagement metrics, trending songs, transcripts, growth velocity. Surfaces emerging trends so I can capitalize on them early and achieve maximum engagement and visibility on our Reels before the trends become saturated. Transformed marketing from gut feel to data-driven. Saved hours every week.",
      tech: "Playwright, built with Claude Code",
    },
    picklq: {
      title: "PicklQ",
      role: "Builder",
      category: "Community Tool",
      image: "/images/PicklQ1.png",
      link: "https://picklq.com",
      oneLine: "A simple queue app for public pickleball courts to eliminate confusion and disputes.",
      problem: "At public pickleball courts, nobody knows who's next up to play. Lots of confusion and arguments stemming from lack of organization.",
      solution: "A simple queue app. Players scan a QR code, join the queue, advance it when games finish. Turn order is transparent. No disputes. Spotted friction in everyday life and solved it with intuitive UX.",
      tech: "Firebase, built with Codex",
    },
    hungriful: {
      title: "Hungriful",
      role: "Builder",
      category: "Group Decision App",
      image: "/images/hungriful.png",
      imageType: "gradient" as const,
      gradientColors: "bg-gradient-to-br from-orange-500 to-red-600",
      oneLine: "Agentic web app turning group dinner planning into quick, shared decisions.",
      problem: "Figuring out where to eat as a group is unnecessarily slow. Group chats drag on with indecision and usually dump a last-minute planning burden on one person.",
      solution: "Hungriful is a web app that uses agentic capabilities to turn planning group dinners into a quick, shared decision. A host sets the criteria (time, location range, price point), the app shows everyone restaurant options that match, friends swipe on what they're down for, and Hungriful returns the top choice with the ability to reserve directly in-app. The UI is a chat interface that makes an API call to Gemini, which parses the prompt intent and calls subsequent APIs (e.g., Google Places, Resy).",
      tech: "React/Next.js (frontend), Node.js (backend APIs), Firebase/Firestore for realtime updates, Google Places/Yelp API",
    },
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
              YP
            </a>
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <a href="#home" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#experience" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group">
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="/Perera_Yuka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-indigo text-white rounded-lg hover:bg-indigo-light transition-all duration-200 text-sm font-medium hover:shadow-md"
              >
                Resume
              </a>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden">
              <a
                href="/Perera_Yuka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo text-white rounded-lg text-sm font-medium"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section id="home" className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-40">
        {/* Radial Glow Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-200/50 via-cream/40 to-transparent rounded-full blur-3xl opacity-60"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal font-[family-name:var(--font-playfair)] leading-[0.95] tracking-tight">
              Yuka<br />Perera.
            </h1>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 bg-indigo text-white rounded-full text-sm font-semibold">
                  MIT Engineer
                </span>
                <span className="px-4 py-1.5 bg-indigo text-white rounded-full text-sm font-semibold">
                  Co-founder
                </span>
                <span className="px-4 py-1.5 bg-indigo text-white rounded-full text-sm font-semibold">
                  Builder
                </span>
              </div>

              <p className="text-lg md:text-xl text-gray-mid leading-relaxed max-w-xl">
                I love to build products that solve real user problems.
              </p>
            </div>

            <div>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-indigo hover:text-indigo-light font-medium transition-colors duration-200 group"
              >
                View selected work
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-warm-gray shadow-lg">
              <Image
                src="/images/Yuka_Headshot.png"
                alt="Yuka Perera"
                fill
                className="object-cover object-[50%_30%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-warm-gray py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-mid mb-4">THE PHILOSOPHY</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal font-[family-name:var(--font-playfair)] leading-tight">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-charcoal leading-relaxed text-base md:text-lg">
              <p>
                I'm a <strong>curious</strong>, <strong>lifelong learner</strong>, and <strong>product-minded builder</strong>.
                At <strong>MIT</strong>, I studied Mechanical Engineering with a focus on Product Development
                and a minor in Business Management. Graduated <strong>top 10%</strong> of my class and earned membership
                in <strong>Tau Beta Pi</strong> and <strong>Pi Tau Sigma</strong> engineering honor societies.
              </p>

              <p>
                My education taught me to think from first principles and design products that balance technical rigor with real-world usability.
              </p>

              <p>
                I <strong>co-founded Nomad Mannequin</strong> with two MIT friends. We built a full-size mannequin
                that collapses into a briefcase for apparel brands at trade shows. I led customer discovery, product ideation, prototyping, and go to market efforts.
                This experience sharpened my ability to learn fast from customers, make tradeoffs, and ship products that create value.
              </p>
            </div>

            <div className="space-y-6 text-charcoal leading-relaxed text-base md:text-lg">
              <p>
                Professionally, I work in <strong>strategy consulting</strong>. I partner with
                C-suite leaders to diagnose root problems, design solutions, and build prioritized roadmaps to help enterprises
                deliver on their business goals. I also <strong>lead delivery</strong> by writing PRDs and user stories, facilitating client discovery,
                aligning with Design on functional specs and acceptance criteria, and partering with Engineering and client SMEs to
                deliver integrations. I drive backlog prioritization, milestone planning, and regular demos to ensure predictable delivery.
              </p>

              <p>
                Outside of work, I'm always building. I experiment with AI tools, ship side projects to solve my own problems,
                and create tools for my community.
              </p>
            </div>
          </div>

          {/* Personal Images */}
          <div className="mt-24">
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center font-[family-name:var(--font-playfair)]">
              A Bit More About Me
            </h3>

            {/* Where I'm From */}
            <p className="text-charcoal leading-relaxed text-base md:text-lg mb-12 text-center max-w-4xl mx-auto">
              I grew up in Santa Barbara, California to a Japanese mom and a Sri Lankan dad. My entrepreneurial drive
              started early watching my parents grow their mom-and-pop restaurant into a household name in my hometown.
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-md ring-2 ring-emerald/30 group-hover:ring-emerald transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/aboutme-tennis.png"
                    alt="All-American Tennis Player"
                    fill
                    className="object-cover object-[50%_38%]"
                  />
                  <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2 text-lg">
                  <strong>All-American</strong> Tennis Player
                </h4>
                <p className="text-gray-mid text-sm">
                  Competed at the national level and earned All-American honors.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-md ring-2 ring-emerald/30 group-hover:ring-emerald transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/aboutme-hiking.JPG"
                    alt="Hiking and National Parks"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2 text-lg">Nature Lover</h4>
                <p className="text-gray-mid text-sm">
                  Passionate about hiking and on a mission to visit all the national parks.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-md ring-2 ring-emerald/30 group-hover:ring-emerald transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/aboutme-travel.jpeg"
                    alt="World Traveler"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2 text-lg">World Traveler</h4>
                <p className="text-gray-mid text-sm">
                  <strong>20 countries</strong> and counting. Always planning the next adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Grid Layout */}
      <section id="projects" className="py-32 md:py-48 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-mid mb-4">SELECTED PROJECTS</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal font-[family-name:var(--font-playfair)] leading-tight">
                Projects
              </h2>
            </div>
            <p className="text-gray-mid">2020 — Present</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <ProjectCard
              title={projects.nomad.title}
              role={projects.nomad.role}
              image={projects.nomad.image}
              oneLine={projects.nomad.oneLine}
              onClick={() => setOpenModal("nomad")}
            />

            <ProjectCard
              title={projects.reelbot.title}
              role={projects.reelbot.role}
              image={projects.reelbot.image}
              imageType={projects.reelbot.imageType}
              videoSrc={projects.reelbot.videoSrc}
              oneLine={projects.reelbot.oneLine}
              onClick={() => setOpenModal("reelbot")}
            />

            <ProjectCard
              title={projects.picklq.title}
              role={projects.picklq.role}
              image={projects.picklq.image}
              oneLine={projects.picklq.oneLine}
              onClick={() => setOpenModal("picklq")}
            />

            <ProjectCard
              title={projects.hungriful.title}
              role={projects.hungriful.role}
              image={projects.hungriful.image}
              imageType={projects.hungriful.imageType}
              gradientColors={projects.hungriful.gradientColors}
              oneLine={projects.hungriful.oneLine}
              onClick={() => setOpenModal("hungriful")}
            />
          </div>

          {/* Project Modals */}
          <ProjectModal
            isOpen={openModal === "nomad"}
            onClose={() => setOpenModal(null)}
            {...projects.nomad}
          />
          <ProjectModal
            isOpen={openModal === "reelbot"}
            onClose={() => setOpenModal(null)}
            {...projects.reelbot}
          />
          <ProjectModal
            isOpen={openModal === "picklq"}
            onClose={() => setOpenModal(null)}
            {...projects.picklq}
          />
          <ProjectModal
            isOpen={openModal === "hungriful"}
            onClose={() => setOpenModal(null)}
            {...projects.hungriful}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-warm-gray py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-mid mb-4">THE JOURNEY</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal font-[family-name:var(--font-playfair)] leading-tight">
              Experience
            </h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-indigo/20"></div>

            <div className="space-y-12">
              {/* Accenture */}
              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-0 top-2 flex items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-cream-dark shadow-lg ring-2 ring-emerald flex items-center justify-center">
                    <Image
                      src="/images/acn-logo.png"
                      alt="Accenture"
                      width={32}
                      height={32}
                      className="object-contain md:w-12 md:h-12"
                    />
                  </div>
                </div>

                <div className="bg-cream rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-warm-gray hover:ring-emerald/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
                        Accenture Strategy
                      </h3>
                      <p className="text-sm md:text-lg text-gray-mid font-medium">Strategist</p>
                    </div>
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-emerald/10 text-emerald rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                      Jul 2023 – Present
                    </span>
                  </div>
                  <ul className="space-y-3 text-charcoal">
                    <li className="flex gap-3 items-start">
                      <span className="text-emerald font-bold shrink-0 mt-1">→</span>
                      <span>Partnered with C-suite executives at a global logistics company to design operating model strategy and define shared services roadmap</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-emerald font-bold shrink-0 mt-1">→</span>
                      <span>Led delivery for a major financial services client, working with engineers and SMEs to deploy pilot solutions that met performance targets</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-emerald font-bold shrink-0 mt-1">→</span>
                      <span>Redesigned customer experience for a large consumer bank using Agile methodology, writing PRDs and technical requirements to transform user flows</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* MIT Global Teaching Labs */}
              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-0 top-2 flex items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-cream-dark shadow-lg ring-2 ring-indigo flex items-center justify-center">
                    <Image
                      src="/images/mit-logo.png"
                      alt="MIT"
                      width={32}
                      height={32}
                      className="object-contain md:w-12 md:h-12"
                    />
                  </div>
                </div>

                <div className="bg-cream rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-warm-gray hover:ring-indigo/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
                        MIT Global Teaching Labs
                      </h3>
                      <p className="text-sm md:text-lg text-gray-mid font-medium">Entrepreneurship and CS Instructor</p>
                    </div>
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-indigo/10 text-indigo rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                      Dec 2022 – Jul 2023
                    </span>
                  </div>
                  <ul className="space-y-3 text-charcoal">
                    <li className="flex gap-3 items-start">
                      <span className="text-indigo font-bold shrink-0 mt-1">→</span>
                      <span>Designed curriculum on entrepreneurship, data analytics, and computer science for advanced high school students in Italy and Israel</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-indigo font-bold shrink-0 mt-1">→</span>
                      <span>Led interactive lessons that encouraged critical thinking and hands-on problem solving</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* General Motors */}
              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-0 top-2 flex items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-cream-dark shadow-lg ring-2 ring-indigo flex items-center justify-center">
                    <Image
                      src="/images/gm-logo.svg"
                      alt="General Motors"
                      width={32}
                      height={32}
                      className="object-contain md:w-12 md:h-12"
                    />
                  </div>
                </div>

                <div className="bg-cream rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-warm-gray hover:ring-indigo/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
                        General Motors
                      </h3>
                      <p className="text-sm md:text-lg text-gray-mid font-medium">Product Development Hardware Engineer</p>
                    </div>
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-indigo/10 text-indigo rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                      Jun 2022 – Aug 2022
                    </span>
                  </div>
                  <ul className="space-y-3 text-charcoal">
                    <li className="flex gap-3 items-start">
                      <span className="text-indigo font-bold shrink-0 mt-1">→</span>
                      <span>Optimized experimental variables (material, temperature, size) to improve in-lab EV battery performance by 6%</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-indigo font-bold shrink-0 mt-1">→</span>
                      <span>Collaborated with a multidisciplinary team on sustainable vehicle body and accessory innovations to strengthen competitive positioning</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Other Experience */}
              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-0 top-2 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-cream-dark shadow-md ring-2 ring-warm-gray group-hover:ring-gray-mid flex items-center justify-center">
                    <span className="text-xl md:text-2xl text-gray-mid">+</span>
                  </div>
                </div>

                <div className="bg-cream/80 rounded-2xl p-5 md:p-8 shadow-sm border border-warm-gray hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-charcoal mb-3 font-[family-name:var(--font-playfair)]">
                    Other Experience
                  </h3>
                  <p className="text-sm md:text-base text-charcoal leading-relaxed">
                    Gained experience at <strong>Shell Oil</strong> focusing on sustainable engineering practices.
                    Also conducted research across multiple <strong>MIT</strong> labs,
                    exploring product development, materials engineering, and applied design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-40 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-mid mb-6">LET'S CONNECT</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-8 font-[family-name:var(--font-playfair)] leading-tight">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-mid mb-12 max-w-2xl mx-auto leading-relaxed">
            Always open to product opportunities, collaborations, or just chatting about building things.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-base md:text-lg">
            <a
              href="mailto:yukaperera@gmail.com"
              className="text-charcoal hover:text-indigo transition-colors duration-200 font-medium"
            >
              yukaperera@gmail.com
            </a>
            <span className="hidden sm:inline text-gray-light">|</span>
            <a
              href="https://www.linkedin.com/in/yuka-perera-062933199/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo hover:text-indigo-light font-medium transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Dark Footer with CTA */}
      <footer className="bg-charcoal text-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-[family-name:var(--font-playfair)] leading-tight">
              Ready to build<br />something great?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:yukaperera@gmail.com"
                className="px-8 py-4 bg-indigo text-white rounded-lg hover:bg-indigo-light transition-all duration-200 font-medium text-lg hover:shadow-lg hover:scale-105"
              >
                Send me an email
              </a>
              <a
                href="/Perera_Yuka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-charcoal rounded-lg hover:bg-cream transition-all duration-200 font-medium text-lg hover:shadow-lg hover:scale-105"
              >
                View resume
              </a>
            </div>
          </div>

          <div className="border-t border-gray-mid/30 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/yuka-perera-062933199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:yukaperera@gmail.com"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Email
                </a>
              </div>
              <p className="text-white/60 text-sm">
                © 2026 Yuka Perera. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

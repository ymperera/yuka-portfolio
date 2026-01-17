import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-gray-900">YP</a>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#home" className="text-gray-600 hover:text-teal-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-teal-600 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-teal-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
              <a
                href="/Perera_Yuka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
              >
                Resume
              </a>
            </div>
            {/* Mobile menu button - simplified for now */}
            <div className="md:hidden">
              <a
                href="/Perera_Yuka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center">
          <div className="w-48 h-48 relative rounded-full overflow-hidden mx-auto mb-8 ring-4 ring-teal-100">
            <Image
              src="/images/Yuka_Headshot.png"
              alt="Yuka Perera"
              fill
              className="object-cover object-[70%_50%]"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Yuka Perera
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-5 py-2 bg-teal-600 text-white rounded-full text-base md:text-lg font-semibold shadow-sm">
              <strong>MIT</strong>  Engineering
            </span>
            <span className="px-5 py-2 bg-teal-600 text-white rounded-full text-base md:text-lg font-semibold shadow-sm">
              <strong>Co-founder</strong>
            </span>
            <span className="px-5 py-2 bg-teal-600 text-white rounded-full text-base md:text-lg font-semibold shadow-sm">
              <strong>Product Manager</strong> & Builder
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            I love to build products that solve real user problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
            <a href="mailto:yukaperera@gmail.com" className="text-gray-700 hover:text-gray-900">
              yukaperera@gmail.com
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="https://www.linkedin.com/in/yuka-perera-062933199/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Me
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
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
              that collapses into a briefcase for apparel brands at trade shows. I drove everything from customer discovery and ideation to prototyping and through to
              sales and marketing. It taught me how to make tradeoffs, learn fast from customers, and ship products that create value.
            </p>

            <p>
              Professionally, I work in <strong>strategy consulting</strong> for large enterprises, often in Financial Services. I partner with
              C-suite executives to diagnose root problems, design solutions, and build prioritized roadmaps to help enterprises
              deliver on their business goals. My role has expanded to include <strong>delivery management</strong> on cross-functional agile teams.
              I translate the strategy into execution by writing PRDs and user stories, facilitating client discovery to validate requirements,
              partering with Design on functional requirements and acceptance criteria, and working with Engineering and client SMEs to deliver integrations.
              I drive backlog prirotization, milestone planning, and regular demos to ensure predictable delivery.
               
  
            </p>

            <p>
              Outside of work, I'm always building. I experiment with AI tools, ship side projects to solve my own problems,
              and create tools for my community.
            </p>

            <div className="pt-8 mt-8 border-t-2 border-teal-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏡</span>
                Where I'm From
              </h3>
              <p>
                I grew up in Santa Barbara, California to a Japanese mom and a Sri Lankan dad. My entrepreneurial drive
                started early watching my parents grow their mom-and-pop restaurant into a household name in my hometown.
              </p>
            </div>
          </div>

          {/* Personal Images */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">A Bit More About Me</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md ring-2 ring-teal-100">
                  <Image
                    src="/images/aboutme-tennis.png"
                    alt="All-American Tennis Player"
                    fill
                    className="object-cover object-[50%_38%]"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  <strong>All-American</strong> Tennis Player
                </h4>
                <p className="text-gray-600 text-sm">
                  Competed at the national level and earned All-American honors.
                </p>
              </div>

              <div className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md ring-2 ring-teal-100">
                  <Image
                    src="/images/aboutme-hiking.JPG"
                    alt="Hiking and National Parks"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2"> Nature Lover</h4>
                <p className="text-gray-600 text-sm">
                  Passionate about hiking and on a mission to visit all the national parks.
                </p>
              </div>

              <div className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md ring-2 ring-teal-100">
                  <Image
                    src="/images/aboutme-travel.jpeg"
                    alt="World Traveler"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">World Traveler</h4>
                <p className="text-gray-600 text-sm">
                  <strong>20 countries</strong> and counting. Always planning the next adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Projects
          </h2>

          <div className="space-y-16">
            {/* Nomad Mannequin */}
            <div className="group">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md">
                    <Image
                      src="/images/Nomad1.png"
                      alt="Nomad Mannequin"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">Nomad Mannequin</h3>
                    <span className="px-3 py-1.5 bg-teal-600 text-white text-sm rounded-full font-semibold">Co-Founder</span>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">Product & Hardware</p>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p>
                        Apparel brands lose sales at trade shows when buyers can't see clothes on a body. Traditional mannequins are expensive, fragile, and a pain to transport.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What I Built</h4>
                      <p>
                        A full-size mannequin that collapses into a briefcase. Portable, affordable, practical.
                      </p>
                      <p className="mt-2">
                        I owned everything: customer discovery, prototyping in the machine shop, manufacturing tradeoffs, and go-to-market. Learned how to balance user needs with real-world constraints and ship products from zero to revenue.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">
                        Tech: CAD, laser cutting, 3D printing, machine shop fabrication
                      </p>
                      <a
                        href="https://nomadmannequin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-teal-600 hover:text-teal-800 mt-2 font-medium"
                      >
                        Visit nomadmannequin.com →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reel Bot */}
            <div className="group">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-md">
                    <video
                      src="/images/ReelBot.MOV"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">Reel Bot</h3>
                    <span className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-full font-semibold">Product Builder</span>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">Growth Automation</p>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p>
                        Marketing Nomad on Instagram was manual and slow. Spotting trends early was nearly impossible.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What I Built</h4>
                      <p>
                        A web scraper that tracks Instagram Reels: engagement metrics, trending songs, transcripts, growth velocity. Surfaces emerging trends so I can ride them before they saturate.
                      </p>
                      <p className="mt-2">
                        Transformed marketing from gut feel to data-driven. Saved hours every week.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">
                        Tech: Playwright, built with Claude Code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PicklQ */}
            <div className="group">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md">
                    <Image
                      src="/images/PicklQ1.png"
                      alt="PicklQ"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">PicklQ</h3>
                    <span className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-full font-semibold">Product Builder</span>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">Community Tool</p>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p>
                        At public pickleball courts, nobody knows who's next. Lots of confusion and occasional arguments.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What I Built</h4>
                      <p>
                        A simple queue app. Players scan a QR code, join the queue, advance it when games finish. Turn order is transparent. No disputes.
                      </p>
                      <p className="mt-2">
                        Spotted friction in everyday life and solved it with minimal UX.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">
                        Tech: Firebase, built with Codex
                      </p>
                      <a
                        href="https://picklq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-teal-600 hover:text-teal-800 mt-2 font-medium"
                      >
                        Visit picklq.com →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directory Scraper */}
            <div className="group">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center shadow-md">
                    <div className="text-white text-center p-6">
                      <div className="text-5xl mb-2">🔍</div>
                      <div className="text-lg font-semibold">Directory Scraper</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">Directory Scraper</h3>
                    <span className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-full font-semibold">Developer</span>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">Sales Automation</p>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p>
                        Outbound sales for Nomad meant manually clicking through trade show directories, evaluating leads, and writing custom outreach. Painfully slow.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What I Built</h4>
                      <p>
                        A scraper that pulls brand data into spreadsheets, ranks leads by fit, and preps them for outreach. Days of research compressed into minutes.
                      </p>
                      <p className="mt-2 text-sm italic">
                        Next: automate personalized emails using the scraped data.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">
                        Tech: Web scraping, built with Codex
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Experience
          </h2>

          <div className="space-y-10">
            {/* Accenture */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 relative shrink-0">
                  <Image
                    src="/images/acn-logo.png"
                    alt="Accenture"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Accenture Strategy</h3>
                      <p className="text-base text-gray-600 font-medium">Strategy Analyst</p>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">June 2024 – Present</p>
                  </div>
                  <ul className="space-y-2 text-gray-700 mt-3">
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>Partnered with C-suite executives at a global logistics company to design operating model strategy and define shared services roadmap</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>Led delivery for a major financial services client, working with engineers and SMEs to deploy pilot solutions that met performance targets</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>Redesigned customer experience for a large consumer bank using Agile methodology, writing PRDs and technical requirements to transform user flows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MIT Global Teaching Labs */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 relative shrink-0">
                  <Image
                    src="/images/mit-logo.png"
                    alt="MIT"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">MIT Global Teaching Labs</h3>
                      <p className="text-base text-gray-600 font-medium">Entrepreneurship and Computer Science Instructor</p>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">Dec 2022 – Jul 2023</p>
                  </div>
                  <ul className="space-y-2 text-gray-700 mt-3">
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>Designed curriculum on entrepreneurship, data analytics, and computer science for advanced high school students in Italy and Israel</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>Led interactive lessons that encouraged critical thinking and hands-on problem solving</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* General Motors */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 relative shrink-0">
                  <Image
                    src="/images/gm-logo.svg"
                    alt="General Motors"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">General Motors</h3>
                      <p className="text-base text-gray-600 font-medium">Product Development Hardware Engineering Intern</p>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">Jun 2022 – Aug 2022</p>
                  </div>
                  <ul className="space-y-2 text-gray-700 mt-3">
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>Optimized experimental variables (material, temperature, size) to improve in-lab EV battery performance by 6%</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>Collaborated with a multidisciplinary team on sustainable vehicle body and accessory innovations to strengthen competitive positioning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Experience */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-gray-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Other Experience</h3>
              <p className="text-gray-700">
                Gained experience at <strong>Shell Oil</strong> focusing on sustainable engineering practices.
                Also conducted research across multiple <strong>MIT</strong> labs,
                exploring product development, materials engineering, and applied design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Always open to product opportunities, collaborations, or just chatting about building things.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
            <a href="mailto:yukaperera@gmail.com" className="text-gray-700 hover:text-gray-900">
              yukaperera@gmail.com
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="https://www.linkedin.com/in/yuka-perera-062933199/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <p>© 2026 Yuka Perera. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

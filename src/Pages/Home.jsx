import { useEffect, useRef, useState, useMemo } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import TroyanskiBiznesi from "../img/troyanski_biznesi.png";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionRefs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    []
  );

  // Sample data - replace with your own
  const aboutData = {
    name: "Ivo Tsochev",
    title: "React Developer",
    description:
      "Crafting clean, responsive user interfaces with React, React Native, and Next.js, with a focus on performance, accessibility, and seamless cross-device user experiences.",
    location: "Sofia",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  };

  const experienceData = [
    {
      company: "DSK Bank",
      position: "Frontend Engineer",
      period: "2025 - Present",
      description:
        "Developed and maintained user-facing features using modern frontend technologies. Collaborated with design and backend teams to deliver high-quality products. Ensured the technical feasibility of UI/UX designs.",
    },
    {
      company: "Devi8 Studio",
      position: "React Developer",
      period: "2022 - 2025",
      description:
        "Developing and maintaining web applications using React. Implementing responsive and user-friendly interfaces. Optimizing applications for maximum speed and scalability.",
    },
    {
      company: "Little Vitamin",
      position: "Web Developer",
      period: "2020 - 2022",
      description:
        "Designed and developed custom e-commerce solutions for clients using Shopify and WordPress. Created responsive, user-friendly websites with optimized checkout flows, implemented payment gateways, and customized themes to match brand identities. Delivered complete online store solutions that improved client conversion rates.",
    },
    {
      company: "TSO Host/GoDaddy",
      position: "Chat Support Agent",
      period: "2019 - 2020",
      description:
        "Provided technical support for web hosting services. Assisted customers with domain management, website setup, and troubleshooting.",
    },
  ];

  const projectsData = [
    {
      name: "Троянски Бизнеси",
      description:
        "A platform for local businesses in Troyan, Bulgaria. It allows users to discover and connect with local services and products. Available on iOS, Android and Huawei AppGallery",
      technologies: [
        "React",
        "React-Native",
        "TypeScript",
        "Nativewind",
        "Supabase",
      ],
      link: "https://troyanskibiznesi.headless.team/",
      preview: TroyanskiBiznesi,
    },
  ];

  // Typing effect for section titles
  const TypedText = ({ text }) => {
    return (
      <span>
        <Typewriter
          words={[text]}
          loop={1} // Runs only once
          typeSpeed={100}
          cursor
        />
      </span>
    );
  };

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.75 }
    );

    Object.values(sectionRefs).forEach(
      (ref) => ref.current && observer.observe(ref.current)
    );

    return () => {
      Object.values(sectionRefs).forEach(
        (ref) => ref.current && observer.unobserve(ref.current)
      );
    };
  }, [sectionRefs]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <h1 className="text-xl font-bold text-white">{aboutData.name}</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            {["home", "about", "experience", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm transition-colors ${
                    activeSection === item
                      ? "text-green-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-green-400">/</span>
                  {item}
                </button>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {
                isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm md:hidden">
          <div className="container mx-auto px-4 pt-20">
            <nav className="flex flex-col items-center space-y-6">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false); // Close menu on selection
                    }}
                    className={`text-lg transition-colors ${
                      activeSection === item
                        ? "text-green-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-green-400">/</span>
                    {item}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          ref={sectionRefs.home}
          className="min-h-screen flex flex-col justify-center px-4"
        >
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center mb-2">
                <span className="text-green-400 mr-2">$</span>
                <p className="text-gray-400">whoami</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-green-400">{aboutData.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
                {aboutData.title}
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                {aboutData.description}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-green-500 text-black font-medium rounded hover:bg-green-400 transition-colors"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 border border-green-500 text-green-400 font-medium rounded hover:bg-green-500/10 transition-colors"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection("about")}>
              <ChevronDown className="text-green-400" size={32} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={sectionRefs.about} className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center mb-12">
              <span className="text-green-400 mr-2">$</span>
              <h2 className="text-3xl font-bold">
                <TypedText text="about-me" />
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  I'm a frontend developer specializing in building exceptional
                  digital experiences. Currently, I'm focused on building
                  responsive, accessible, and performant web applications with
                  modern technologies.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  My expertise spans across the React ecosystem, including React
                  Native for mobile development and Next.js for server-rendered
                  applications. I'm passionate about clean code, user
                  experience, and staying up-to-date with the latest frontend
                  trends.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies or enjoying outdoor activities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">
                  <span className="text-green-400 mr-2">&gt;</span>
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {aboutData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 rounded-md text-sm border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 text-green-400">
                  <span className="text-green-400 mr-2">&gt;</span>
                  Location
                </h3>
                <p className="text-lg">
                  <span className="text-gray-400">Based in:</span>{" "}
                  {aboutData.location}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={sectionRefs.experience}
          className="py-20 px-4 bg-gray-950"
        >
          <div className="container mx-auto">
            <div className="flex items-center mb-12">
              <span className="text-green-400 mr-2">$</span>
              <h2 className="text-3xl font-bold">
                <TypedText text="work-experience" />
              </h2>
            </div>

            <div className="space-y-12">
              {experienceData.map((job, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-400 group-hover:translate-x-1 transition-transform">
                        {job.position}
                      </h3>
                      <p className="text-lg text-white">{job.company}</p>
                    </div>
                    <p className="text-gray-400">{job.period}</p>
                  </div>
                  <p className="text-lg leading-relaxed max-w-3xl">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={sectionRefs.projects}
          className="py-20 px-4"
        >
          <div className="container mx-auto">
            <div className="flex items-center mb-12">
              <span className="text-green-400 mr-2">$</span>
              <h2 className="text-3xl font-bold">
                <TypedText text="projects" />
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.preview || "../../img/react.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-400 hover:underline"
                    >
                      <span className="text-green-400 mr-2">&gt;</span> View
                      Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={sectionRefs.contact}
          className="py-20 px-4 bg-gray-950"
        >
          <div className="container mx-auto">
            <div className="flex items-center mb-12">
              <span className="text-green-400 mr-2">$</span>
              <h2 className="text-3xl font-bold">
                <TypedText text="contact-me" />
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-center mb-8">
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <a
                  href="mailto:hello@example.com"
                  className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500 transition-all hover:bg-gray-800/80 group"
                >
                  <Mail
                    size={32}
                    className="text-green-400 mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p
                    className="text-gray-400 text-center"
                    style={{ wordBreak: "break-word" }}
                  >
                    ivaylo@headless.team
                  </p>
                </a>

                <a
                  href="https://github.com/IvoTsochev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500 transition-all hover:bg-gray-800/80 group"
                >
                  <Github
                    size={32}
                    className="text-green-400 mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-bold mb-2">GitHub</h3>
                  <p
                    className="text-gray-400 text-center"
                    style={{ wordBreak: "break-word" }}
                  >
                    https://github.com/IvoTsochev
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/ivaylotsochev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500 transition-all hover:bg-gray-800/80 group"
                >
                  <Linkedin
                    size={32}
                    className="text-green-400 mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                  <p
                    className="text-gray-400 text-center"
                    style={{ wordBreak: "break-word" }}
                  >
                    https://www.linkedin.com/in/ivaylotsochev/
                  </p>
                </a>
              </div>

              <div className="text-center">
                <a
                  href="mailto:ivaylo@headless.team"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-black font-medium rounded hover:bg-green-400 transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 text-center text-sm text-gray-500">
        <div className="container mx-auto">
          <p className="mb-4">
            <span className="text-green-400">$</span> echo "Designed & Built by{" "}
            {aboutData.name}"
          </p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  year: string;
  role: string;
  art: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "NOVA",
    subtitle: "Digital Banking Experience",
    category: "UI/UX DESIGN · PRODUCT DESIGN",
    description: "A clear, human approach to everyday money management.",
    year: "20XX",
    role: "UI/UX Designer",
    art: "nova",
  },
  {
    id: "02",
    title: "ORBIT",
    subtitle: "AI Productivity Platform",
    category: "UI/UX DESIGN · WEB DESIGN",
    description: "An intelligent workspace shaped around focus and momentum.",
    year: "20XX",
    role: "Product Designer",
    art: "orbit",
  },
  {
    id: "03",
    title: "KORA",
    subtitle: "Brand Identity System",
    category: "BRAND DESIGN · VISUAL IDENTITY",
    description: "A rhythmic identity system built to move across every medium.",
    year: "20XX",
    role: "Brand Designer",
    art: "kora",
  },
  {
    id: "04",
    title: "LUMA",
    subtitle: "E-commerce Experience",
    category: "UI/UX DESIGN · WEB DESIGN",
    description: "A warm, editorial storefront for considered objects.",
    year: "20XX",
    role: "UI/UX Designer",
    art: "luma",
  },
  {
    id: "05",
    title: "MONO",
    subtitle: "Creative Brand System",
    category: "BRAND DESIGN · ART DIRECTION",
    description: "A bold monochrome language designed for creative expression.",
    year: "20XX",
    role: "Brand Designer",
    art: "mono",
  },
  {
    id: "06",
    title: "PULSE",
    subtitle: "Mobile Experience",
    category: "UI/UX DESIGN · MOBILE APP",
    description: "A responsive mobile companion for better daily habits.",
    year: "20XX",
    role: "Mobile Product Designer",
    art: "pulse",
  },
];

const expertise = [
  {
    number: "01",
    title: "UI/UX DESIGN",
    description:
      "Creating intuitive digital experiences from research and wireframes through high-fidelity interfaces and prototypes.",
  },
  {
    number: "02",
    title: "BRAND DESIGN",
    description:
      "Building distinctive identities, visual systems and memorable brand experiences.",
  },
  {
    number: "03",
    title: "WEB DESIGN",
    description:
      "Designing responsive websites that combine strong visual direction with usability.",
  },
  {
    number: "04",
    title: "VISUAL DESIGN",
    description:
      "Creating visual systems, digital assets, campaigns and art direction.",
  },
];

const process = [
  ["01", "DISCOVER", "Understand the problem."],
  ["02", "DEFINE", "Find the right direction."],
  ["03", "EXPLORE", "Generate and test ideas."],
  ["04", "DESIGN", "Turn concepts into systems."],
  ["05", "REFINE", "Polish every important detail."],
  ["06", "DELIVER", "Create work ready for the real world."],
];

const education = [
  {
    date: "2024 — PRESENT",
    company: "Gombe State University",
    role: "B.Sc Computer Science",
    detail: "Studied at Gombe State University, building academic knowledge, critical thinking, research, communication, and problem-solving skills to support my personal and professional development.",
  },
  {
    date: "2023 — 2024",
    company: "ALX Foundation",
    role: "Professional Foundations",
    detail: "Developing professional skills in problem-solving, teamwork, communication, project management, and digital technology through the ALX Professional Foundations Program.",
  },
  {
    date: "2024 — 2025",
    company: "Google UX Design Certificate – Coursera",
    role: "Google UX Design Foundations",
    detail: "Learned the fundamentals of UX/UI design, including user research, wireframing, prototyping, usability testing, and creating user-centered designs using the design thinking process.",
  },
];


const experience = [
  {
    date: "2024 — PRESENT",
    company: "Gombe ",
    role: "B.Sc ",
    detail: "Studied ort my personal ",
  },
  {
    date: "2024 — PRESENT",
    company: "Gombe ",
    role: "B.Sc ",
    detail: "Studied ort my personal ",
  },
  {
   date: "2024 — PRESENT",
    company: "Gombe ",
    role: "B.Sc ",
    detail: "Studied ort my personal ",
  },
]; 



const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/turakistudios", placeholder: false },
  { label: "Instagram [replace link]", href: "#", placeholder: true },
  { label: "Behance [replace link]", href: "#", placeholder: true },
  { label: "Dribbble [replace link]", href: "#", placeholder: true },
  { label: "X / Twitter [replace link]", href: "#", placeholder: true },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function ProjectArt({ project, hero = false }: { project: Project; hero?: boolean }) {
  return (
    <div className={`project-art art-${project.art} ${hero ? "hero-art" : ""}`} aria-hidden="true">
      <span className="art-grid" />
      <span className="art-word">{project.title}</span>
      <span className="art-index">{project.id}</span>
      <span className="art-shape shape-a" />
      <span className="art-shape shape-b" />
      <span className="art-ui">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

function MagneticLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const box = ref.current.getBoundingClientRect();
    const x = (event.clientX - box.left - box.width / 2) * 0.12;
    const y = (event.clientY - box.top - box.height / 2) * 0.12;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <a ref={ref} href={href} className={`magnetic ${className}`} onMouseMove={move} onMouseLeave={reset}>
      {children}
    </a>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [featured, setFeatured] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const [cursorMode, setCursorMode] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onPointer = (event: PointerEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      if (heroVisualRef.current && window.matchMedia("(pointer: fine)").matches) {
        const x = (event.clientX / window.innerWidth - 0.5) * 14;
        const y = (event.clientY / window.innerHeight - 0.5) * 14;
        heroVisualRef.current.style.setProperty("--mx", `${x}px`);
        heroVisualRef.current.style.setProperty("--my", `${y}px`);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const cursorEnter = (mode = "active") => () => setCursorMode(mode);
  const cursorLeave = () => setCursorMode("");

  return (
    <div className="site-shell">
      <div ref={cursorRef} className={`custom-cursor ${cursorMode}`}><span>{cursorMode === "view" ? "VIEW" : ""}</span></div>
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a href="#top" className="wordmark" onMouseEnter={cursorEnter()} onMouseLeave={cursorLeave}>
          MUHAMMAD YUNUSA
        </a>
        <div className="availability"><span /> AVAILABLE FOR CREATIVE WORK</div>
        <nav aria-label="Primary navigation">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#expertise">EXPERTISE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="top">
          <div className="hero-kicker reveal">
            <span>UI/UX DESIGNER</span>
            <span>BRAND DESIGNER</span>
            <span>VISUAL DESIGNER</span>
          </div>
          <div className="hero-title-wrap">
            <h1 className="hero-name">
              <span className="line-mask"><span>Turaki</span></span>
              <span className="line-mask offset"><span>Studios</span></span>
            </h1>

            <div className="hero-intro">
              <p><em>i'm Muhammad Yunusa</em> and i'm What you'd called a digital handymam.</p>
              <div className="hero-actions">

              
            <div ref={heroVisualRef} className="hero-composition">
              <div className="visual-frame">
                <img src="/src/image/turaki.jpg" alt="turaki image" />
                <span className="visual-noise" />
                <span className="visual-type">.</span>
                <span className="visual-orbit" />
                <span className="visual-panel">FORM<br />+ FUNCTION</span>
                <span className="visual-code">8.993° N<br />7.456° E</span>
              </div>
              </div>
            </div>
          </div>
          </div>
          <div className="hero-bottom reveal">
            <h2>I DESIGN DIGITAL<br />EXPERIENCES<br /><em>WITH INTENTION.</em></h2>
            <div className="hero-intro">
              <p>I design digital experiences and visual identities that turn ideas into memorable experiences.</p>
              <div className="hero-actions">
                <MagneticLink href="#work" className="text-link">EXPLORE WORK <span>↓</span></MagneticLink>
                <MagneticLink href="mailto:workwithturaki@gmail.com" className="text-link">LET&apos;S TALK <Arrow /></MagneticLink>
              </div>
            </div>
          </div>
          <div className="scroll-mark">SCROLL TO EXPLORE <span /></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">01 / WORK</p>
            <h2>SELECTED <em>WORK</em></h2>
            <p>A selection of digital experiences, visual identities and interfaces designed with intention.</p>
          </div>

          <div className="featured reveal">
            <div
              className="featured-visual"
              onMouseEnter={cursorEnter("view")}
              onMouseLeave={cursorLeave}
              onClick={() => setSelected(projects[featured])}
            >
              <ProjectArt project={projects[featured]} hero />
              <button aria-label={`View ${projects[featured]} case study`}>VIEW CASE <Arrow /></button>
            </div>
            <div className="featured-list">
              <p className="eyebrow">FEATURED INDEX</p>
              {projects.slice(0, 4).map((project, index) => (
                <button
                  key={project.id}
                  className={featured === index ? "active" : ""}
                  onMouseEnter={() => setFeatured(index)}
                  onFocus={() => setFeatured(index)}
                  onClick={() => setSelected(project)}
                >
                  <span>{project.id}</span>
                  <strong>{project.title}</strong>
                  <small>{project.subtitle}</small>
                  <Arrow />
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project reveal project-${index + 1}`} key={project.id}>
                <button
                  className="project-visual"
                  onClick={() => setSelected(project)}
                  onMouseEnter={cursorEnter("view")}
                  onMouseLeave={cursorLeave}
                  aria-label={`Open ${project.title} case study`}
                >
                  <ProjectArt project={project} />
                </button>
                <button className="project-info" onClick={() => setSelected(project)}>
                  <span className="project-number">{project.id}</span>
                  <span>
                    <strong>{project.title}</strong>
                    <small>{project.subtitle}</small>
                  </span>
                  <span className="project-category">{project.category}<br />{project.year}</span>
                  <Arrow />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="about-label reveal"><p className="eyebrow">01 / ABOUT</p><span>NIGERIA · GMT+1</span></div>
          <h2 className="about-statement reveal">
            I&apos;M A DESIGNER WHO<br />
            CARES ABOUT HOW THINGS<br />
            <em>LOOK, FEEL AND WORK.</em>
          </h2>
          <div className="about-body reveal">
            <div className="about-monogram"> <img src="/src/image/turaki1.jpg" alt="turaki image" /></div>
            <p>I&apos;m Muhammad Yunusa, a UI/UX and brand designer from Nigeria with over four years of experience creating digital experiences, websites and visual identities. I enjoy transforming complex ideas into simple, expressive and memorable design systems.</p>
          </div>
          <div className="stats reveal">
            <div><strong>05+</strong><span>YEARS EXPERIENCE</span></div>
            <div><strong>40+</strong><span>PROJECTS</span></div>
            <div><strong>UI/UX</strong><span>DESIGN</span></div>
            <div><strong>BRAND</strong><span>DESIGN</span></div>
          </div>
        </section>







 <section className="education section-pad">
          <div className="section-heading compact reveal">
            <p className="eyebrow">02 / EDUCATION</p>
            <h2>Edu<em>cation</em></h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-row reveal" key={item.date}>
                <span>{item.date}</span>
                <div><h3>{item.company}</h3><p>{item.role}</p></div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
        








        <section className="expertise section-pad" id="expertise">
          <div className="section-heading compact reveal">
            <p className="eyebrow">03 / EXPERTISE</p>
            <h2>WHAT I <em>DO</em></h2>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <article className="expertise-row reveal" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section className="process section-pad">
          <div className="process-intro reveal">
            <p className="eyebrow">04 / PROCESS</p>
            <h2>HOW I<br /><em>THINK</em></h2>
            <p>A deliberate process creates space for sharper thinking and more meaningful outcomes.</p>
          </div>
          <div className="process-list">
            {process.map(([number, title, description]) => (
              <article className="process-step reveal" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-pad">
          <div className="section-heading compact reveal">
            <p className="eyebrow">05 / EXPERIENCE</p>
            <h2>WHERE I&apos;VE<br /><em>CREATED</em></h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row reveal" key={item.date}>
                <span>{item.date}</span>
                <div><h3>{item.company}</h3><p>{item.role}</p></div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto section-pad">
          <p className="eyebrow reveal">A CREATIVE PRINCIPLE</p>
          <blockquote className="reveal">
            GOOD DESIGN SHOULD<br />FEEL <em>OBVIOUS</em> —<br />
            EVEN WHEN THE THINKING<br />BEHIND IT ISN&apos;T.
          </blockquote>
          <span className="manifesto-mark">✳</span>
        </section>

        <section className="testimonial section-pad">
          <p className="eyebrow reveal">06 / KIND WORDS · OPTIONAL SECTION</p>
          <blockquote className="reveal">&ldquo;[TESTIMONIAL TEXT]&rdquo;</blockquote>
          <div className="testimonial-credit reveal">
            <strong>[CLIENT NAME]</strong>
            <span>[ROLE / COMPANY]</span>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <p className="eyebrow reveal">07 / START A PROJECT</p>
          <div className="contact-head reveal">
            <span>HAVE AN IDEA?</span>
            <h2>LET&apos;S MAKE<br />SOMETHING<br /><em>MEMORABLE.</em></h2>
          </div>
          <div className="contact-row reveal">
            <MagneticLink href="mailto:workwithturaki@gmail.com" className="contact-cta">
              LET&apos;S TALK <Arrow />
            </MagneticLink>
            <div className="contact-details">
              <a href="mailto:workwithturaki@gmail.com">workwithturaki@gmail.com</a>
              <a href="https://linkedin.com/in/turakistudios" target="_blank" rel="noreferrer">LinkedIn · Turaki Studios <Arrow /></a>
            </div>
          </div>
          <div className="social-row reveal">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={social.placeholder ? "placeholder-link" : ""}
                target={social.href !== "#" ? "_blank" : undefined}
                rel="noreferrer"
                onClick={social.href === "#" ? (event) => event.preventDefault() : undefined}
              >
                {social.label} <Arrow />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <div><strong>MUHAMMAD YUNUSA</strong><span>UI/UX DESIGNER · BRAND DESIGNER</span><span>NIGERIA · GMT+1</span></div>
        <div className="footer-nav"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#expertise">EXPERTISE</a><a href="#contact">CONTACT</a></div>
        <div><span>© 2026 MUHAMMAD YUNUSA</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>

      {selected && (
        <div className="case-study" role="dialog" aria-modal="true" aria-label={`${selected.title} case study`}>
          <button className="case-close" onClick={() => setSelected(null)}>CLOSE <span>×</span></button>
          <div className="case-hero">
            <p className="eyebrow">PROJECT {selected.id} / {selected.category}</p>
            <h2>{selected.title}</h2>
            <p>{selected.subtitle}</p>
          </div>
          <ProjectArt project={selected} hero />
          <div className="case-meta">
            <div><span>ROLE</span><strong>{selected.role}</strong></div>
            <div><span>YEAR</span><strong>{selected.year}</strong></div>
            <div><span>CLIENT</span><strong>[CLIENT NAME]</strong></div>
            <div><span>TEAM</span><strong>[TEAM / COLLABORATORS]</strong></div>
            <div><span>TIMELINE</span><strong>[X WEEKS]</strong></div>
          </div>
          <div className="case-content">
            {["OVERVIEW", "THE CHALLENGE", "THE APPROACH", "EXPLORATION", "DESIGN", "FINAL EXPERIENCE", "RESULT", "PROJECT GALLERY"].map((heading) => (
              <section key={heading}>
                <p className="eyebrow">{heading}</p>
                <h3>[Add {heading.toLowerCase()} content here.]</h3>
                <p>This is editable placeholder copy for the {selected.title} case study. Replace it with the project story, decisions, process and outcomes.</p>
              </section>
            ))}
          </div>
          <button
            className="next-project"
            onClick={() => setSelected(projects[(projects.indexOf(selected) + 1) % projects.length])}
          >
            <span>NEXT PROJECT</span>
            <strong>{projects[(projects.indexOf(selected) + 1) % projects.length].title}</strong>
            <Arrow />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

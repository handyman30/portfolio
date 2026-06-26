'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "React Native", "Tailwind"],
  "Backend": ["Python", "Django", "FastAPI", "Node.js", "gRPC", "GraphQL"],
  "Infra & data": ["AWS", "Docker", "CI/CD", "Terraform", "PostgreSQL", "Redis"],
};

const experience = [
  {
    role: "Software Engineer",
    company: "4DMedical",
    tag: "ASX: 4DX",
    period: "Jan 2023 — Present",
    blurb: "Backend services and front-ends for a lung imaging platform that ingests large volumes of patient scans. Folded ML models into the image pipeline and cut average incident resolution time by about half.",
  },
  {
    role: "Software Engineer",
    company: "Who Gives A Crap",
    tag: "B Corp",
    period: "Jan 2022 — Jan 2023",
    blurb: "Ran A/B tests and CRO experiments across sign-up, checkout and subscription flows on a React + Shopify stack, and built the experimentation tooling other engineers shipped on.",
  },
  {
    role: "Software Engineer",
    company: "The Good Guys",
    tag: "JB Hi-Fi · ASX: JBH",
    period: "Jul 2019 — Dec 2021",
    blurb: "Helped move a monolithic e-commerce app to microservices, built catalog and checkout interfaces, and kept inventory and pricing in sync across channels.",
  },
];

const projects = [
  {
    href: "/demos/lung-3d",
    title: "Interactive Lung 3D",
    desc: "A browser-based medical imaging demo: a breathing 3D lung, DICOM slice scrubbing and a respiratory data overlay. Built with Three.js, drawn from my day job at 4DMedical.",
    label: "WebGL · Three.js",
    meta: "Demo",
    image: null,
    external: false,
  },
  {
    href: "/demos/fintech-dashboard",
    title: "FinPay Dashboard",
    desc: "A fintech analytics dashboard with live transaction monitoring, payment-method breakdowns, risk scoring and regional views. React and TypeScript.",
    label: "React · TypeScript",
    meta: "Demo",
    image: "/images/fintech-dashboard.png",
    external: false,
  },
  {
    href: "https://apps.apple.com/au/app/hangtime-basketball/id6450975691",
    title: "Hangtime",
    desc: "A mobile app for finding local basketball runs and pickup games around Melbourne. Around 10,000 people have used it.",
    label: "React Native · iOS",
    meta: "App Store",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/60/d7/86/60d78611-8a19-5e58-02e0-c636059f564c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
    external: true,
  },
  {
    href: "https://recruiter-copilot-ai-production.up.railway.app/dashboard",
    title: "Recruiter Copilot",
    desc: "A recruiting dashboard that does candidate matching and first-pass screening, with the data views recruiters actually look at day to day.",
    label: "Next.js · LLM",
    meta: "Live",
    image: "/images/recruiter-copilot.png",
    external: true,
  },
  {
    href: "https://hesitant-dock-production.up.railway.app/",
    title: "LifeGPT",
    desc: "A reflection app where you talk to different versions of yourself — your future self, your 60-year-old self, your harshest critic. A small side project about self-awareness.",
    label: "Next.js · LLM",
    meta: "Live",
    image: "/images/lifegpt.png",
    external: true,
  },
  {
    href: "https://re-coded.com.au",
    title: "Re-Coded",
    desc: "A site for a recruitment agency — clean, mobile-first, built to make it easy for both clients and candidates to get in touch.",
    label: "Client work",
    meta: "Live",
    image: "/images/pink-fluid.png",
    external: true,
  },
];

const posts = [
  { href: "/blog/vector-embeddings-rag", title: "Vector embeddings and RAG, explained from scratch", dek: "How text turns into numbers, why keyword search falls down, and what it actually takes to put a retrieval system into production.", read: "25 min", tag: "Machine learning" },
  { href: "/blog/react-energy-footprint", title: "Cutting a React app's energy footprint in six steps", dek: "Battery and CPU are a UX cost too. A repeatable way to profile a React app and trim the waste.", read: "18 min", tag: "React · Performance" },
  { href: "/blog/incident-management-stack-2025", title: "Picking an incident management stack in 2025", dek: "What I'd reach for to get from 'something's wrong' to 'it's fixed' without ten dashboards in between.", read: "22 min", tag: "DevOps" },
  { href: "/blog/polling-websockets-server-actions", title: "Polling vs. WebSockets vs. Server Actions", dek: "Three ways to keep a React/Next.js UI in sync, and how I decide which one a feature actually needs.", read: "16 min", tag: "React · Next.js" },
  { href: "/blog/quality-engineering-testing", title: "Testing at scale: unit tests, Cypress and SonarCloud", dek: "Tests are less about coverage numbers and more about the habits that keep bugs out of prod.", read: "15 min", tag: "Testing" },
  { href: "/blog/grpc-medical-devices", title: "Talking to medical devices over gRPC", dek: "Connecting 4DMedical's XVD hardware to the cloud, and how the protocol choice cut bandwidth by 80%.", read: "12 min", tag: "gRPC · Medical" },
  { href: "/blog/railway-deployment-guide", title: "Shipping on Railway with Postgres and Git", dek: "Deployment shouldn't be the hard part. How I get small projects live without a weekend of YAML.", read: "10 min", tag: "DevOps" },
  { href: "/blog/ecommerce-observability", title: "The invisible layer of e-commerce: observability", dek: "Mixpanel, New Relic and Sumo Logic — what they each tell you, and how they fit together.", read: "12 min", tag: "E-commerce · DevOps" },
  { href: "/blog/monolith-to-microservices", title: "From monolith to microservices, without the dogma", dek: "Most platforms start as a monolith for good reasons. When splitting it up is worth the pain.", read: "8 min", tag: "Architecture" },
  { href: "/blog/hangtime-app", title: "Building Hangtime: basketball meets software", dek: "The business side and the technical side of building a sports community app as a side project.", read: "10 min", tag: "Mobile" },
  { href: "/blog/beyond-stripe", title: "Beyond Stripe: when to build your own payments", dek: "Stripe covers most cases. The handful where it doesn't, and how to roll your own safely.", read: "12 min", tag: "Payments" },
  { href: "/blog/medical-imaging", title: "Medical imaging in the cloud: DICOM, PACS and ML", dek: "The standards and plumbing behind processing medical images at scale.", read: "14 min", tag: "Healthcare" },
  { href: "/blog/aussie-ecommerce-asia", title: "Scaling an Aussie e-commerce brand into Asia", dek: "Currency, localization, logistics and the cultural things you only learn by getting them wrong first.", read: "11 min", tag: "E-commerce" },
];

const testimonials = [
  { quote: "Handy is a rare breed of engineer. He brings deep technical capability across a broad range of verticals, but he also has a sharp eye for design and detail that sets him apart. Having placed over 500 technologists into roles over the past decade, I can confidently say Handy stands out.", name: "Charlie Beattie", title: "Director & Principal, Re-Coded" },
  { quote: "Handy has a deep understanding of system architecture, scalability and performance. On the DRRD project he kept everyone aligned, proposed solutions, and completed his work promptly and at high quality. An excellent full-stack engineer.", name: "Jeff Ma", title: "Lead Software Engineer, 4DMedical" },
  { quote: "Strong depth in algorithms and CS fundamentals. His thoughtful approach to turning complex research ideas into practical software made him an invaluable bridge between the research and engineering teams.", name: "ChengJu Tsai", title: "Master of Engineering" },
  { quote: "A talented and resourceful engineer with a real passion for clean, scalable code. Handy consistently delivers beyond expectations and brings a collaborative, solutions-driven mindset to every project.", name: "Emanuela Yuliana", title: "Graphic Designer" },
  { quote: "Highly capable across both greenfield and brownfield work, and well-versed in the architecture behind it. His input in grooming sessions often turned into the most thoughtful, user-friendly features.", name: "Daniel Ramezani", title: "Frontend Developer" },
  { quote: "Handy has all the traits you want in a teammate: attentive to detail, a fast learner, and genuine enthusiasm for both learning and sharing knowledge. Great in close teams where code review really matters.", name: "Jonathan Nicholas", title: "Senior Software Engineer, Dye & Durham" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#fbfbf9]/85 backdrop-blur border-b border-[#e6e4dd]">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-medium tracking-tight">Handy Hasan</Link>
          <div className="flex items-center gap-7 text-sm text-[#6b6b6b]">
            <a href="#work" className="hover:text-[#1a1a1a] transition-colors">Work</a>
            <a href="#writing" className="hover:text-[#1a1a1a] transition-colors">Writing</a>
            <Link href="/experience" className="hover:text-[#1a1a1a] transition-colors">Experience</Link>
            <a href="#contact" className="hover:text-[#1a1a1a] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col-reverse md:flex-row md:items-end gap-10 md:gap-16"
        >
          <div className="flex-1">
            <p className="kicker mb-5">Software engineer · Melbourne</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
              Hi, I&apos;m Handy.
            </h1>
            <div className="max-w-xl text-[1.0625rem] leading-relaxed text-[#3a3a3a] space-y-4">
              <p>
                I&apos;m a software engineer in Melbourne with 7+ years across the full stack. Right now I&apos;m building medical imaging systems at <span className="text-[#1a1a1a] font-medium">4DMedical</span> (ASX: 4DX).
              </p>
              <p>
                Before that I worked at <span className="text-[#1a1a1a] font-medium">Who Gives A Crap</span> and <span className="text-[#1a1a1a] font-medium">The Good Guys</span> (JB Hi-Fi, ASX: JBH). I mostly work in React, Python and AWS. Open to work with Melbourne tech companies and startups.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-8 text-sm">
              <a href="#contact" className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-md hover:bg-black transition-colors">
                Get in touch
              </a>
              <a href="#work" className="text-[#1f3a5f] hover:underline underline-offset-4">Selected work</a>
              <a href="#writing" className="text-[#1f3a5f] hover:underline underline-offset-4">Writing</a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-44 h-52 md:w-56 md:h-64 overflow-hidden rounded-2xl border border-[#e6e4dd]">
              <Image
                src="/images/profile.jpg"
                alt="Handy Hasan"
                width={448}
                height={512}
                quality={100}
                className="w-full h-full object-cover object-[72%_28%]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="border-t border-[#e6e4dd] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14 grid gap-8 sm:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="kicker mb-3">{group}</p>
              <p className="text-[#3a3a3a] leading-relaxed">{items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 md:py-20 scroll-mt-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <Link href="/experience" className="text-sm text-[#1f3a5f] hover:underline underline-offset-4">Full history →</Link>
        </div>
        <div className="divide-y divide-[#e6e4dd] border-y border-[#e6e4dd]">
          {experience.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="py-7 grid md:grid-cols-[1fr_2fr] gap-2 md:gap-8"
            >
              <div>
                <div className="font-medium">{job.company}</div>
                <div className="text-sm text-[#6b6b6b]">{job.tag}</div>
                <div className="text-sm text-[#6b6b6b] mt-1">{job.period}</div>
              </div>
              <div>
                <div className="font-medium mb-1.5">{job.role}</div>
                <p className="text-[#3a3a3a] leading-relaxed">{job.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-[#e6e4dd] bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-10">Selected work</h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((p) => {
              const Card = (
                <div className="group">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden border border-[#e6e4dd] bg-[#fbfbf9] mb-4 relative">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        unoptimized={p.image.startsWith("http")}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="kicker">{p.label}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium group-hover:text-[#1f3a5f] transition-colors">{p.title}</h3>
                    <span className="kicker shrink-0">{p.meta}</span>
                  </div>
                  <p className="text-sm text-[#3a3a3a] leading-relaxed mt-2">{p.desc}</p>
                  <p className="text-xs text-[#6b6b6b] mt-3">{p.label}</p>
                </div>
              );
              return p.external ? (
                <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer">{Card}</a>
              ) : (
                <Link key={p.title} href={p.href}>{Card}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="max-w-5xl mx-auto px-6 py-16 md:py-20 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Writing</h2>
        <p className="text-[#6b6b6b] mb-10">Notes from the work — mostly things I had to figure out and wanted to write down.</p>
        <div className="divide-y divide-[#e6e4dd] border-y border-[#e6e4dd]">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="group block py-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                <h3 className="font-medium group-hover:text-[#1f3a5f] transition-colors sm:flex-1">{post.title}</h3>
                <span className="kicker shrink-0">{post.tag} · {post.read}</span>
              </div>
              <p className="text-sm text-[#3a3a3a] leading-relaxed mt-2 max-w-2xl">{post.dek}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="border-t border-[#e6e4dd] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-10">What people say</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {testimonials.map((t) => (
              <figure key={t.name}>
                <blockquote className="text-[#3a3a3a] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm">
                  <span className="font-medium text-[#1a1a1a]">{t.name}</span>
                  <span className="text-[#6b6b6b]"> · {t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Get in touch</h2>
            <p className="text-[#3a3a3a] leading-relaxed mb-6 max-w-md">
              Looking for a collaborator, a contractor, or just want to talk shop? Drop me a line — I read everything.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:handy.hasan@yahoo.com" className="text-[#1f3a5f] hover:underline underline-offset-4">handy.hasan@yahoo.com</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/handy-hasan-a6aa73176" target="_blank" rel="noopener noreferrer" className="text-[#1f3a5f] hover:underline underline-offset-4">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/handyman30" target="_blank" rel="noopener noreferrer" className="text-[#1f3a5f] hover:underline underline-offset-4">GitHub</a>
              </li>
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e6e4dd]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6b6b6b]">
          <p>© {new Date().getFullYear()} Handy Hasan</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/handy-hasan-a6aa73176" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">LinkedIn</a>
            <a href="https://github.com/handyman30" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

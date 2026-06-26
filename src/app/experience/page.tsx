'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

const roles = [
  {
    company: "4DMedical",
    tag: "ASX: 4DX",
    role: "Software Engineer",
    period: "Jan 2023 — Present",
    location: "Melbourne",
    summary:
      "4DMedical builds lung imaging technology that turns ordinary scans into detailed, regional measurements of how someone actually breathes. I work across the platform that ingests and processes that imaging data.",
    points: [
      "Built and maintained backend services and APIs that ingest large volumes of patient imaging data, with low-latency processing and end-to-end security.",
      "Worked alongside data scientists and clinical specialists to fold AI/ML models into the image-processing pipeline.",
      "Built responsive front-ends for visualizing lung-function metrics so clinicians can work through patient assessments.",
      "Set up CI/CD pipelines and infrastructure-as-code to automate builds, tests and deployments across environments.",
      "Added telemetry and monitoring dashboards that cut average incident resolution time by around 50%.",
      "Mentored junior and mid-level engineers on modular design, TDD and CI practices.",
    ],
    stack: ["Python", "Django", "React", "TypeScript", "gRPC", "AWS", "Docker", "PostgreSQL", "DICOM"],
  },
  {
    company: "Who Gives A Crap",
    tag: "B Corp",
    role: "Software Engineer",
    period: "Jan 2022 — Jan 2023",
    location: "Melbourne · Hybrid",
    summary:
      "Who Gives A Crap makes recycled toilet paper and donates half its profits to build toilets and improve sanitation. I worked on the growth engineering side — the experiments behind sign-up, checkout and subscriptions.",
    points: [
      "Led the technical side of high-impact A/B tests and CRO experiments across sign-up, checkout and subscription flows.",
      "Worked closely with a product manager, designers and contractors to turn hypotheses into clean, reusable React + Shopify code.",
      "Built and scaled the experimentation infrastructure, feature flags and shared components that other engineers shipped on.",
      "Put engineering practices in place: automated testing, analytics instrumentation, QA and safe deploy/rollback strategies.",
      "Helped shape the squad roadmap, prioritizing experiments by data, feasibility and business impact.",
    ],
    stack: ["React", "Shopify", "JavaScript", "Feature flags", "A/B testing", "Analytics"],
  },
  {
    company: "The Good Guys",
    tag: "JB Hi-Fi · ASX: JBH",
    role: "Software Engineer",
    period: "Jul 2019 — Dec 2021",
    location: "Melbourne",
    summary:
      "The Good Guys is one of Australia's largest electronics and appliance retailers, part of the JB Hi-Fi group. I worked on the e-commerce platform through a period of heavy digital growth.",
    points: [
      "Helped migrate a large monolithic e-commerce app to a microservices architecture, cutting release downtime by around 60%.",
      "Built and optimized the product catalog and checkout interfaces, with measurable gains in conversion.",
      "Built real-time services to keep inventory and pricing in sync across channels, integrating with vendor systems and marketplaces.",
      "Automated testing and deployment with CI/CD pipelines, tightening code-quality standards and shortening release cycles.",
      "Prototyped a recommendation engine using machine learning, which lifted average order value by about 12%.",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Redis", "AWS", "Jenkins"],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#fbfbf9]/85 backdrop-blur border-b border-[#e6e4dd]">
        <nav className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-medium tracking-tight">Handy Hasan</Link>
          <div className="flex items-center gap-7 text-sm text-[#6b6b6b]">
            <Link href="/#work" className="hover:text-[#1a1a1a] transition-colors">Work</Link>
            <Link href="/#writing" className="hover:text-[#1a1a1a] transition-colors">Writing</Link>
            <Link href="/experience" className="text-[#1a1a1a]">Experience</Link>
            <Link href="/#contact" className="hover:text-[#1a1a1a] transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 md:pt-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="kicker mb-5">Experience</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Seven years, three companies.
          </h1>
          <p className="text-[1.0625rem] leading-relaxed text-[#3a3a3a] max-w-xl">
            From a retail platform handling millions of transactions, to a B Corp running constant growth experiments, to medical imaging software clinicians rely on. Here&apos;s the longer version.
          </p>
        </motion.div>
      </section>

      {/* Roles */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="border-t border-[#e6e4dd]">
          {roles.map((job) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="py-12 border-b border-[#e6e4dd]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h2 className="text-xl font-semibold tracking-tight">{job.company}</h2>
                <span className="kicker">{job.period}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#6b6b6b] mb-5">
                <span className="text-[#1a1a1a]">{job.role}</span>
                <span>·</span>
                <span>{job.tag}</span>
                <span>·</span>
                <span>{job.location}</span>
              </div>

              <p className="text-[#3a3a3a] leading-relaxed mb-6 max-w-xl">{job.summary}</p>

              <ul className="space-y-3 mb-6">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[#3a3a3a] leading-relaxed">
                    <span className="text-[#1f3a5f] mt-2.5 h-px w-3 shrink-0 bg-[#1f3a5f]" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {job.stack.map((tech) => (
                  <span key={tech} className="text-xs text-[#6b6b6b]">{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-[#e6e4dd] pt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Want to work together?</h2>
          <p className="text-[#3a3a3a] leading-relaxed mb-6 max-w-md">
            I&apos;m open to roles and projects with Melbourne tech companies and startups. The fastest way to reach me is email.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link href="/#contact" className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-md hover:bg-black transition-colors">
              Get in touch
            </Link>
            <Link href="/#work" className="text-[#1f3a5f] hover:underline underline-offset-4">See my work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

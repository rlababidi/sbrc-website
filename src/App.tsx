import React, { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Our Work" },
    { id: "stakeholders", label: "Stakeholders" },
  { id: "membership", label: "Membership" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const opts = { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.1 };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
    }, opts);
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });
    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* HEADER (dark navy; links blend in; underline on active/hover) */}
      <header className="sticky top-0 z-40 bg-[#0a1b36] text-white shadow">
        <div className="w-full px-6 sm:px-8 py-3 flex items-center">
          <div className="font-bold text-lg tracking-wide text-[#f1b70a]">SBRC</div>
          <nav className="ml-auto flex items-center gap-5 sm:gap-7">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`pb-2 text-sm font-medium border-b-2 transition
                  ${
                    active === id
                      ? "text-[#f1b70a] border-[#f1b70a]"
                      : "text-white border-transparent hover:text-[#f1b70a] hover:border-[#f1b70a]"
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO (full-width section; centered inner content) */}
      <Section id="home" bg="bg-[#152349]" text="text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#f1b70a]">
            Sequence Biosecurity Risk Consortium
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-200">
            Science-based standards for identifying and managing “sequences of concern” in DNA synthesis.
          </p>
        </div>
      </Section>

      <Section id="about" bg="bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#0a1b36]">About</h2>
          <p className="mt-4 text-slate-700 max-w-3xl leading-relaxed">
            Founded in 2025, the SBRC maintains a standard definition of “sequences of concern,” convening nucleic acid providers, screening tool developers, policymakers, and experts to improve biosecurity. 
            We use a rough-consensus process that prioritizes resolving technical objections over vote-counting.
          </p>
        </div>
      </Section>
        <Section id="work" bg="bg-[#eef3ff]">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold text-[#0a1b36] mb-6">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <WorkCard title="Biosecurity Flag Rubric" summary="A science-based rubric to assess sequence risk." />
              <WorkCard title="Test Sets Collection" summary="Curated sequences labelled by whether or not they are sequences of concern (e.g., pathogen gene fragments)." />
              <WorkCard title="Developing Robust Standards" summary="A science-based baseline of sequences of concern for screening, regulation, and proficiency testing." />
              <WorkCard title="Multistakeholder Community" summary="A trusted forum to disclose, discuss, and address screening vulnerabilities." />
            </div>
          </div>
        </Section>

      <Section id="stakeholders" bg="bg-[#eef3ff]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-[#0a1b36] mb-6">Stakeholders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <WorkCard title="Nucleic Acid Providers" summary="Access resources to mitigate costly biosecurity risks, reduce compliance costs, and help shape standards & policy." />
            <WorkCard title="Screening Tool Developers" summary="Shape standards, influence regulation, address vulnerabilites, and access materials for testing and quality assurance." />
            <WorkCard title="Policymakers & Advocates" summary="Align biosecurity regulation and policy with science and industry best practices." />
            <WorkCard title="Scientific & Technical Experts" summary="Ensure dangerous capabilities are not overlooked." />
          </div>
        </div>
      </Section>

      <Section id="membership" bg="bg-[#eef3ff]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-[#0a1b36]">Membership</h2>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Eligible members include nucleic acid providers, adjacent biotech service providers,
            screening tool developers, policymakers, biosecurity advocates, and scientific/technical experts.
          </p>
          <a
            href="mailto:tessa@ibbis.bio?subject=Joining%20the%20SBRC"
            className="mt-6 inline-block px-6 py-3 rounded-lg bg-[#f1b70a] text-[#0a1b36] font-semibold hover:brightness-105"
          >
           Join Us
          </a>
                  </div>
      </Section>

      <Section id="resources" bg="bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-[#0a1b36]">Resources</h2>
          <a
            href="https://www.liebertpub.com/doi/10.1089/apb.2023.0033"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 text-[#b8860b] underline underline-offset-4 hover:text-[#a6790a]"
          >
          Progress and Prospects for a Nucleic Acid Screening Test Set (2024)
          </a>
                    <a
            href="https://www.biorxiv.org/content/10.1101/2025.05.30.655379v1"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 text-[#b8860b] underline underline-offset-4 hover:text-[#a6790a]"
          >
          Inter-tool analysis of a NIST dataset for assessing baseline nucleic acid sequence screening (2025)
          </a>
        </div>
      </Section>

      <Section id="contact" bg="bg-[#eef3ff]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-[#0a1b36]">Contact</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          For inquiries about the SBRC reach out at{" "}
          <a
            href="mailto:contact@sequencesafety.org?subject=SBRC%20Inquiry"
            className="text-[#f1b70a] font-semibold underline hover:text-[#d9a60a]"
          >
            info@ibbis.bio
          </a>
          .
        </p>
        </div>
      </Section>
    <footer className="w-full bg-[#0a1b36] text-gray-400 text-sm py-4">
  <div className="mx-auto max-w-6xl px-6 sm:px-8 text-center">
    The Sequence Biosecurity Risk Consortium is funded by Sentinel Bio
  </div>
</footer>
    </div>
  );
}

/** Full-width section wrapper with consistent horizontal padding */
function Section({
  id,
  bg,
  text = "",
  children,
}: {
  id: string;
  bg: string;
  text?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 w-full ${bg} ${text}`}>
      <div className="w-full px-6 sm:px-8 py-16">{children}</div>
    </section>
  );
}

/** Reusable card component for work/value grids */
function WorkCard({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg text-[#0a1b36]">{title}</h3>
      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{summary}</p>
    </div>
  );
}


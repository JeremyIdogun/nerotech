export const services = [
  {
    slug: "governance-public-sector-advisory",
    title: "Governance & Public Sector Advisory",
    eyebrow: "Reform, accountability and delivery assurance",
    iconName: "Building2",
    summary:
      "We help public institutions, agencies and development programmes strengthen governance, procurement, financial controls and institutional performance.",
    description:
      "NeroTech supports reform-minded institutions with advisory and implementation support across procurement systems, public financial management, fiscal accountability, compliance, audit frameworks and institutional reform.",
    outcomes: [
      "Stronger governance and accountability frameworks",
      "Improved procurement and financial control processes",
      "Clearer delivery structures and reporting lines",
      "Better transparency, compliance and value-for-money assurance",
    ],
    capabilities: [
      "Procurement reform and systems design",
      "Public financial management advisory",
      "Compliance reviews and procurement audits",
      "Internal control and risk management frameworks",
      "Open contracting and transparency initiatives",
      "Monitoring, evaluation and learning support",
    ],
  },
  {
    slug: "data-digital-technology-transformation",
    title: "Data, Digital & Technology Transformation",
    eyebrow: "Smarter systems for better decisions",
    iconName: "BarChart3",
    summary:
      "We design data, analytics and digital systems that help organisations improve decision-making, visibility and operational performance.",
    description:
      "NeroTech helps institutions modernise their data and digital foundations through data architecture, analytics systems, decision-support platforms, digital transformation strategy and AI-enabled products.",
    outcomes: [
      "Improved visibility across operational and strategic performance",
      "Cleaner data pipelines and more reliable reporting",
      "Better executive decision-support systems",
      "Modernised digital processes and platforms",
    ],
    capabilities: [
      "Data engineering and data architecture",
      "Analytics dashboards and BI systems",
      "Data governance and data quality advisory",
      "Digital transformation strategy",
      "AI-enabled systems and decision-support tools",
      "Monitoring, evaluation and learning systems",
    ],
  },
  {
    slug: "cybersecurity-software-solutions",
    title: "Cybersecurity & Software Solutions",
    eyebrow: "Secure platforms, resilient systems",
    iconName: "ShieldCheck",
    summary:
      "We help organisations design, secure and improve digital products, platforms and technology environments.",
    description:
      "NeroTech combines cybersecurity advisory, system design and software development capability to help organisations build reliable, secure and user-centred digital solutions.",
    outcomes: [
      "Reduced technology and security risk",
      "More secure digital platforms and systems",
      "Better user experience and product reliability",
      "Improved post-deployment support and optimisation",
    ],
    capabilities: [
      "Cybersecurity frameworks and security audits",
      "Vulnerability assessments and penetration testing",
      "Web and mobile application development",
      "Enterprise software design and implementation",
      "UX, QA and post-deployment optimisation",
      "Managed IT and technical support services",
    ],
  },
  {
    slug: "capacity-building-development-advisory",
    title: "Capacity Building & Development Advisory",
    eyebrow: "Capability that lasts beyond the engagement",
    iconName: "GraduationCap",
    summary:
      "We design training, mentorship and development programmes that help teams sustain change long after delivery.",
    description:
      "NeroTech supports organisations and development programmes with project management, structured learning, technical mentorship, institutional strengthening and sector-focused advisory.",
    outcomes: [
      "Stronger internal capability",
      "Improved project delivery discipline",
      "Better knowledge transfer and adoption",
      "More sustainable institutional improvement",
    ],
    capabilities: [
      "Project management consultancy",
      "Professional training and workshops",
      "Technical mentorship and learning pathways",
      "Institutional strengthening programmes",
      "Agribusiness and value chain advisory",
      "Development partner programme support",
    ],
  },
] as const;

export type Service = (typeof services)[number];

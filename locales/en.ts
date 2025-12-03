export const en = {
  header: {
    logo: "faddit",
    nav: {
      product: "Product",
      howItWorks: "How it works",
      pricing: "Pricing",
      contact: "Contact",
    },
  },
  hero: {
    tagline: "Organize your fashion workflows digitally",
    headline: "A fashion design solution for everyone",
    subheadline:
      "From emerging designers to growing labels, keep all your design-to-production information in one workspace.",
    ctaPrimary: "Request live demo",
    ctaSecondary: "See product features",
  },
  userStories: {
    title: "Stories from real faddit users",
    subtitle:
      "From independent designers to small brands, managing collections with faddit.",
    testimonials: [
      {
        name: "Designer Kim",
        role: "Brand Designer",
        brand: "BRAND A",
        quote:
          "Previously, we had to constantly switch between spreadsheets and messaging apps, but now we can see the entire lineup and factory communications on one screen.",
      },
      {
        name: "Fashion Park",
        role: "Creative Director",
        brand: "BRAND B",
        quote:
          "The work instruction writing that used to repeat every season has become simple, and collaboration with factories can now be managed much more systematically.",
      },
      {
        name: "Studio Lee",
        role: "Studio Director",
        brand: "STUDIO C",
        quote:
          "We need to manage multiple brands simultaneously, and being able to quickly find information for each project has greatly improved work efficiency.",
      },
    ],
  },
  logos: {
    title: "Brands already organizing their work with faddit.",
  },
  problem: {
    title: "Are your design and production details scattered everywhere?",
    problems: [
      {
        title: "Work information scattered across messaging apps, emails, and Excel",
        description:
          "Style sketches, size specs, and fabric information are scattered across messengers and files, requiring explanation every time a team member joins.",
      },
      {
        title: "Collection management without seeing the big picture of the lineup",
        description:
          "It's difficult to see the entire season lineup and color/price range balance at a glance, so you only discover omissions or deviations at the last minute.",
      },
      {
        title: "Missing communication history with factories",
        description:
          "Important conversations like revision requests, delivery date changes, and price adjustments are not recorded, causing the same issues to repeat in subsequent seasons.",
      },
    ],
  },
  solution: {
    title: "A completely new fashion design workspace",
    subtitle:
      "Bring together design, specs, lineup, and production communication in one place to structurally manage your entire collection.",
    values: [
      {
        title: "Design work information on one screen",
        description:
          "Organize style images, size specs, and fabric/color information on one screen to show as a design card that anyone can understand at a glance.",
      },
      {
        title: "Structural management of collection lineup",
        description:
          "Organize lineups by criteria such as season, category, price range, and color to grasp the overall collection balance at a glance.",
      },
      {
        title: "Connect pattern, sample, and production history",
        description:
          "Link pattern files, sample feedback, and production progress into one timeline, so you don't have to search again even when seasons change.",
      },
    ],
  },
  features: {
    title: "Key features that connect design and production",
    items: [
      {
        title: "Digital work instructions",
        description: "Create and manage work instructions with text, images, and file uploads.",
      },
      {
        title: "Factory-specific project board",
        description:
          "Check ongoing projects, quotes, and delivery information for each factory on one board.",
      },
      {
        title: "Version control & comments",
        description: "Record style change history and comments as a timeline.",
      },
      {
        title: "File & pattern viewer",
        description:
          "Structure to link related materials such as patterns and sample photos.",
      },
    ],
  },
  howItWorks: {
    title: "How faddit works",
    steps: [
      {
        step: "1",
        title: "Create project",
        description: "Create a season or collection and generate style cards.",
      },
      {
        step: "2",
        title: "Upload work information",
        description: "Attach design sketches, specs, and fabric information to cards.",
      },
      {
        step: "3",
        title: "Factory matching & collaboration",
        description:
          "Share projects with suitable factories and coordinate quotes and delivery dates.",
      },
      {
        step: "4",
        title: "Production progress & history accumulation",
        description:
          "Record progress and communication from samples to mass production and shipping on a timeline.",
      },
    ],
  },
  moodImage: {
    text: "Where craftsmanship meets data, better collections are born.",
  },
  pricing: {
    title: "Currently in beta.",
    subtitle:
      "We are running a pilot with interested designers and factory partners.",
    registerInterest: "Register interest",
    plans: [
      {
        name: "Designer Beta",
        description: "For individuals/small teams",
        features: [
          "Collection management",
          "Style card creation",
          "Factory collaboration tools",
          "Basic file management",
        ],
      },
      {
        name: "Factory Partner",
        description: "Factory-specific view",
        features: [
          "Project management",
          "Quote management",
          "Progress tracking",
          "Designer communication",
        ],
      },
      {
        name: "Studio / Agency",
        description: "Manage multiple brands simultaneously",
        features: [
          "Multi-brand management",
          "Advanced analytics tools",
          "Priority support",
          "Custom features",
        ],
      },
    ],
  },
  footer: {
    description:
      "A fashion design & production collaboration solution for everyone",
    email: "contact@faddit.co.kr",
    links: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
    copyright: "© faddit, All rights reserved.",
    currentLanguage: "English version",
  },
  contact: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    company: "Company (Optional)",
    message: "Message",
    submit: "Submit",
    submitting: "Submitting...",
    success: "Your inquiry has been sent successfully.",
    error: "An error occurred while sending. Please try again.",
  },
} as const;


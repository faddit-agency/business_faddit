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
    registerButton: "Register now to receive free templates",
    tabs: {
      workspace: {
        label: "Workspace",
        description: "Manage all your separately managed work items in one place. Supports sketch (JPG, PNG), technical drawing (AI, SVG), pattern (DXF, EMF) extensions",
        viewMore: "View Workspace Details",
        featureId: "feature-workspace",
      },
      "work-instruction": {
        label: "Work Instruction",
        description: "Manage all information systematically with digital work instructions. Upload and manage text, images, and files all at once.",
        viewMore: "View Work Instruction Details",
        featureId: "feature-work-instruction",
      },
      "pattern-cad": {
        label: "Pattern (CAD)",
        description: "Upload and manage CAD pattern files directly. Build an efficient design workflow through pattern revision history and version control.",
        viewMore: "View Pattern (CAD) Details",
        featureId: "feature-pattern-cad",
      },
      promotion: {
        label: "Promotion (Production Agency)",
        description: "Experience professional production management through production agency services. Collaborate with factory partners more systematically.",
        viewMore: "View Promotion Details",
        featureId: "product",
      },
    },
  },
  userStories: {
    title: "Stories from real faddit users",
    subtitle:
      "From independent designers to small brands, managing collections with faddit.",
    testimonials: [
      {
        name: "Kim **",
        role: "Brand Designer",
        brand: "",
        quote:
          "Previously, we had to constantly switch between spreadsheets and messaging apps, but now we can see the entire lineup and factory communications on one screen.",
      },
      {
        name: "Park**",
        role: "Creative Director",
        brand: "",
        quote:
          "The work instruction writing that used to repeat every season has become simple, and collaboration with factories can now be managed much more systematically.",
      },
      {
        name: "Studio Da*",
        role: "Studio Director",
        brand: "",
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
    title: "A completely new fashion design solution",
    subtitle: "Explore ideas freely and create fashion products immediately",
    items: [
      {
        id: "workspace",
        title: "Workspace",
        subtitle: "Manage design assets of various extensions at once",
        description: "Supports a total of 10 extensions including sketches (JPG, PNG), technical drawings (AI, SVG), patterns (DXF, EMF), etc. Manage them by uploading directly within the work instruction.",
        dotColor: "green",
        imageUrl: "https://res.cloudinary.com/dsg01xpat/image/upload/v1764744193/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC_fmgajq.png",
        layout: "image-left",
      },
      {
        id: "work-instruction",
        title: "Work Instruction",
        subtitle: "Layout Diversity",
        description: "All information necessary for apparel design can be configured in text, technical drawing, and image forms. Adjust the layout to enhance communication so that the client and factory can accurately understand it.",
        dotColor: "yellow",
        imageUrl: "https://res.cloudinary.com/dsg01xpat/image/upload/v1764744193/%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%84%89%E1%85%A5_jqtoxj.png",
        layout: "image-right",
      },
      {
        id: "pattern-cad",
        title: "Apparel Pattern",
        subtitle: "Apparel Pattern Preview Function",
        description: "2D/3D pattern files such as DXF, EMF can be checked directly without a separate CAD program. Quickly review pattern pieces and construction structures with real-time preview.",
        dotColor: "blue",
        imageUrl: "https://res.cloudinary.com/dsg01xpat/image/upload/v1764744192/%E1%84%8C%E1%85%A5%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD_fpv6m9.png",
        layout: "image-left",
      },
    ],
    cta: {
      title: "Based on the created work instruction, inquire about apparel production processes immediately.",
      actionText: "Inquire about apparel production",
      subtitle: "We provide reasonable production prices, both domestic and international, depending on the production scale.",
    },
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
  register: {
    banner: "Register now to receive free templates",
    headline: "Register now and",
    headline2: "Get 42 free technical drawings/patterns!",
    subtitle1: "A new way to connect the flow of clothing production, from planning to patterns.",
    subtitle2: "Get essential technical drawing and pattern templates for clothing production for free and start now!",
    form: {
      name: "Name",
      namePlaceholder: "Please enter your name",
      contact: "Contact",
      contactPlaceholder: "Please enter your contact number ex) 01012345677",
      email: "Email",
      emailPlaceholder: "Please enter your email",
      company: "Company (Optional)",
      companyPlaceholder: "Please enter your company name",
      privacyTitle: "Privacy Policy and Consent",
      privacyText1: "faddit ('Company') collects and uses personal information as follows in accordance with relevant laws.",
      privacyText2: "1. Purpose of collection: Consultation for service provision, sending advertising information and event notices",
      privacyText3: "2. Items collected: Name, affiliated company, mobile phone number, email",
      privacyText4: "3. Retention period: Personal information is retained for 6 months from the time of collection and then promptly destroyed",
      privacyText5: "4. Personal information management inquiry: seok@faddit.co.kr",
      agree: "I agree to the collection and use of personal information.",
      submit: "Submit",
      submitting: "Submitting...",
      success: "Registration completed successfully.",
      error: "An error occurred during registration. Please try again.",
    },
  },
} as const;


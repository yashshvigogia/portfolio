// Edit this file to update the site. Everything shown on the page comes from here.

export const profile = {
  name: "Yashshvi",
  title: "Full-stack software engineer",
  intro:
    "I build web applications with React and Node.js, from the database schema to the screen the client sees.",
  location: "Yamunanagar, Haryana, India",
  email: "yashshvigogia@gmail.com",
  phone: "+91 72100-33033", // set to "" to hide your phone number
  linkedin: "https://www.linkedin.com/in/yashshvi-gogia-001696238",
  github: "", // add your GitHub profile URL here, e.g. "https://github.com/yourname"
  resume: "./resume.pdf",
  summary: [
    "I'm a full-stack engineer with 3 years of hands-on experience in Node.js, React.js and scalable web application development. Most of my work is REST API design, third-party integrations like Stripe, Twilio and SendGrid, and database design and optimization.",
    "I work directly with clients from requirements to delivery, and I mentor junior developers on our team. I care about clean, maintainable code and about shipping on time.",
  ],
};

export const apiPreview = {
  role: "Software Engineer",
  company: "GiniLytics IT Solutions",
  experience: "3 years",
  stack: ["React", "Next.js", "Node.js", "Express.js"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  integrations: ["Stripe", "Twilio", "SendGrid"],
  openToWork: true,
};

export const experience = {
  company: "GiniLytics IT Solutions",
  roles: [
    {
      title: "Software Engineer",
      period: "Aug 2025 – Present",
      points: [
        "Work directly with clients from requirements gathering through delivery.",
        "Collaborate with cross-functional teams to deliver scalable web applications while keeping code quality high.",
        "Design and build web applications with a focus on performance and maintainability.",
        "Develop REST APIs and integrate third-party services, including Stripe, Twilio and SendGrid.",
        "Mentor junior developers on setting up and configuring projects.",
      ],
    },
    {
      title: "Jr. Software Engineer",
      period: "Aug 2023 – Jul 2025",
      points: [
        "Worked with senior engineers and QA teams to deliver software to client requirements.",
        "Wrote project roadmaps and scope documents for clear planning and execution.",
        "Designed and optimized database schemas and table structures for web applications.",
      ],
    },
    {
      title: "Software Trainee",
      period: "Feb 2023 – Jul 2023",
      points: [
        "Completed software engineering training in the MERN stack, with hands-on frontend, backend and database work.",
      ],
    },
  ],
};

export const projects = [
  {
    name: "CoApp 2.0",
    kind: "Campaign management platform",
    role: "Full-stack developer",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    about:
      "Lets organizations create, manage and analyze targeted marketing campaigns.",
    points: [
      "Built full-stack features for campaign creation, editing and lifecycle management.",
      "Built RESTful APIs on PostgreSQL for campaign data processing and analytics.",
      "Implemented advanced search and filtering to make campaigns easier to find.",
      "Designed responsive interfaces for monitoring and managing campaigns.",
    ],
  },
  {
    name: "CxPush",
    kind: "Customer feedback and survey platform",
    role: "Frontend developer",
    stack: ["React.js", "NestJS", "PostgreSQL"],
    about:
      "Helps organizations collect customer feedback and analyze responses in real time.",
    points: [
      "Built and maintained the survey creation and response management modules.",
      "Built a drag-and-drop survey builder for customizable surveys.",
      "Added multilingual localization for users around the world.",
      "Designed responsive screens for creating and taking surveys.",
    ],
  },
  {
    name: "Onehaircut",
    kind: "Salon booking platform",
    role: "Full-stack developer, independent contributor",
    stack: ["Next.js", "Node.js", "Express.js", "MySQL", "Stripe", "Twilio"],
    about:
      "A salon marketplace connecting customers with professionals for bookings and appointment management.",
    points: [
      "Independently built end-to-end features for both customer and professional workflows.",
      "Integrated Stripe for secure online payments.",
      "Built Twilio SMS notifications and appointment reminders.",
      "Built booking, profile and appointment tracking modules, plus multilingual support.",
    ],
  },
  {
    name: "HR Portal",
    kind: "Human resource management system",
    role: "Full-stack developer",
    stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    about:
      "One place for employee records, attendance, leave and project tracking.",
    points: [
      "Built dashboards for HR teams and managers.",
      "Implemented attendance tracking and leave approval workflows.",
      "Built daily status reports (DSR) and automated email notifications.",
      "Built project assignment and performance tracking, on secure APIs and optimized database structures.",
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT & OAuth"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Integrations", items: ["Stripe", "Twilio", "SendGrid"] },
  { group: "Tools", items: ["Git & GitHub", "Postman", "VS Code", "AWS (EC2, S3)"] },
  { group: "AI tools", items: ["Claude", "GitHub Copilot", "ChatGPT"] },
];

export const awards = [
  {
    name: "Best Project Demo Award",
    text: "Company recognition for a project demonstration that showed both technical depth and user-focused design.",
  },
  {
    name: "Quarterly Performance Award",
    text: "Selected as one of the top-performing employees for consistent, high-quality contributions.",
  },
  {
    name: "Silent Contributor Award",
    text: "For consistently delivering quality work on time and taking ownership of responsibilities.",
  },
];

export const education = [
  { degree: "Master of Computer Applications", school: "Chandigarh University", years: "2023 – 2025" },
  { degree: "Bachelor of Computer Applications", school: "TIMT, Yamunanagar", years: "2020 – 2023" },
];

export const languages = ["English", "Hindi"];

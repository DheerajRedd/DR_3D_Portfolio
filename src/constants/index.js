import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  hypertune,
  petpedia,
  microbase,
  tripguide,
  threejs,
  wireflyss,
  petcare,
  EventHive,
  aayats,
  Pippinai,
  breddit,
  github,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Internship",
    company_name: "Aayats",
    icon: aayats,
    iconBg: "#383E56",
    date: "November 2023 - May 2024",
    points: [
      "Implemented single-page architecture and utilized front-end frameworks to enhance application performance and user experience.",
      "Employed containerization technologies such as Docker and orchestration platforms like Kubernetes to deploy and manage Aayats microservices-based architecture, ensuring high availability and fault tolerance.",
      "Orchestrated the integration of Next.js into the development stack, leveraging its advanced features such as automatic code splitting, Static site generation, and API routes to deliver lightning-fast user experiences.",
      "Actively participated in code reviews, pair programming sessions, and knowledge sharing initiatives to foster a collaborative and innovative development culture at Aayats, staying abreast of emerging technologies and industry trends",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company_name: "HyperTune Technologies",
    icon: hypertune,
    iconBg: "#383E56",
    date: "June 2020 - January 2022",
    points: [
      "Developed high-performance and user-friendly web applications using a diverse tech stack including HTML5, CSS3, React.js, JavaScript, jQuery, Ajax, JSON, and Tailwind.",
      "Collaborated closely with backend engineers to optimize API calls and enhance overall application efficiency and performance resulting in a 30% improvement in system integration efficiency.",
      "Actively participated in design reviews, providing valuable insights and recommendations to ensure alignment with project goals and objectives.",
      "Implemented CI/CD pipelines with Jenkins, automating code integration, testing, and deployment. This accelerated software delivery, reduced errors, and promoted collaboration across teams.",
      "Developed and implemented a comprehensive testing strategy, resulting in a 30% decrease in application bugs and an improved user experience for over 10,000 users.",
      "Developed robust MERN (MongoDB, ExpressJS, React, NodeJS) stack applications, leveraging GraphQL for efficient schema management, queries, and mutations, ensuring seamless interaction with MongoDB and other datalayers",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Microbase Computers",
    icon: microbase,
    iconBg: "#E6DEDD",
    date: "April 2019 - September 2019",
    points: [
      "Designed and developed interactive and visually appealing user interfaces for web applications using JavaScript and TypeScript.",
      " Implemented GraphQL APIs alongside RESTful endpoints to facilitate flexible and efficient data retrieval from the backend, enabling dynamic updates and real-time interactions within the internal application.",
      "Implemented performance optimizations using Redux and memoization techniques, improving the loading time of the web application by 50%.",
      " Implemented CI/CD pipelines with Jenkins, automating code integration, testing, and deployment. This accelerated software delivery, reduced errors, and promoted collaboration across teams.",
      "Collaborated with the design team to create an intuitive and visually appealing user interface, resulting in a 20% increase in user satisfaction ratings.",
      " Leveraged Apollo Client for state management and data fetching in conjunction with GraphQL, optimizing network requests.",
      "Developed and executed a comprehensive testing strategy for the web application, resulting in a 30% decrease in bug reports and ensuring a smooth user experience.",
      "Actively participated in cross-functional teams to propose and implement innovative solutions spanning multiple layers of technologies, leveraging expertise in JavaScript and TypeScript to address technical challenges effectively.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Petpedia",
    icon: petpedia,
    iconBg: "#383E56",
    date: "April 2018 - Aug 2018",
    points: [
      "Developed and implemented a comprehensive UI component library for Petpedia design system using VueJS, resulting in a 30% increase in development efficiency and consistency across the platform.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Collaborated with cross-functional teams including product designers, project managers, and quality assurance engineers to translate Invision, Sketch, and Figma prototypes into high-fidelity interactive prototypes, resulting in a 15% reduction in development iterations.",
      "Implemented JEST functionality and snapshot testing for UI components to ensure consistency and improve overall code quality, resulting in a 20% decrease in bug reports from quality assurance engineers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dheeraj proved me wrong.",
    name: "Ojasvi Raju",
    designation: "CFO",
    company: "RK Constructions",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dheeraj does.",
    name: "Ashpha connor",
    designation: "COO",
    company: "Star Technologies",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    testimonial:
      "After Dheeraj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lina Wang",
    designation: "CTO",
    company: "wang Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Breadit",
    description:
      "Led the creation of Breaditt, a contemporary Reddit-inspired platform, powered by Next.js and Prisma. Utilizing a full-stack approach, incorporated TypeScript, Tailwind, and Postgres for a robust foundation. Implemented infinite scrolling for seamless post loading and integrated NextAuth with Google OAuth for secure user authentication. Crafted a user-friendly post editor and leveraged Upstash Redis for efficient caching, enhancing performance and scalability. Engineered advanced comment features with nested replies, fostering vibrant community engagement.",
    tags: [
      {
        name: "nextjs",
        color: "red-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "white-text-gradient",
      },
      {
        name: "redis",
        color: "black-text-gradient",
      },
      {
        name: "shad-cn/ui",
        color: "pink-text-gradient",
      },
    ],
    image: breddit,
    source_code_link: "https://github.com/DheerajRedd",
  },
  {
    name: "PawConnect",
    description:
      "Bridging Hearts, Fostering Care. Your Go-To Pet Care Hub for Seamless Vet Consultations, Adoption Bliss, and Tail-Wagging Connections.",
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "hibernate",
        color: "green-text-gradient",
      },
      {
        name: "mariaDB",
        color: "pink-text-gradient",
      },
    ],
    image: petcare,
    source_code_link: "https://github.com/DheerajRedd",
  },
  {
    name: "PIPPIN AI",
    description:
      "Introducing PIPPIN AI, an AI Generative SaaS Platform built on Next.js 14. Seamlessly integrated with five AI generations: conversation, audio, music, image, and video . It heralds a new era of innovation. Leveraging OpenAI and Replicate API, PIPPIN AI delivers a cutting-edge user experience at the forefront of technological advancement.",

    tags: [
      {
        name: "nextjs",
        color: "violet-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "emerald-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "red-text-gradient",
      },
      {
        name: "clerk",
        color: "red-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
      },
      {
        name: "Crisp",
        color: "pink-text-gradient",
      },
    ],
    image: Pippinai,
    source_code_link: "https://pippin-ai.vercel.app/",
  },
  {
    name: "EventHive",
    description: "Event Management Platform, Built on Next.js 14.",
    tags: [
      {
        name: "nextjs",
        color: "violet-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "red-text-gradient",
      },
      {
        name: "clerk",
        color: "red-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "red-text-gradient",
      },
    ],
    image: EventHive,
    source_code_link: "https://github.com/DheerajRedd",
  },
];
const MediaData = [
  {
    img: github,
    title: "GitHub",
    href: "https://github.com/DheerajRedd",
  },
  {
    img: linkedin,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/dheeraj-redd/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  MediaData,
};

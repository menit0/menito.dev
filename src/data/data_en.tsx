import { ColoredText } from "../components/ColoredText";

export const DATA_EN = {
  name: "Guillermo Mena",
  about: "Frontend Developer from Madrid, Spain",
  summary: (
    <p className="leading-relaxed">
      I'm a
      <ColoredText label="frontend developer" />
      with 5 years of professional experience, specializing in{" "}
      <ColoredText label="React" variant="orange" />,
      <ColoredText label="TypeScript" variant="green" /> and{" "}
      <ColoredText label="JavaScript" variant="blue" />, and with previous
      experience in game development with Unity.
      <br />
      I'm also dedicated to independent development of mobile applications with{" "}
      <ColoredText label="Flutter" variant="blue" />, now exceeding 370,000
      downloads.
    </p>
  ),
  links: [
    {
      title: "CV",
      url: "https://google.es/",
    },
    {
      title: "Email",
      url: "mailto:guille.mena@protonmail.com",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/menito",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/menito",
    },
  ],
  work: {
    sectionName: "Work Experience",
    items: [
      {
        title: "Frontend Developer",
        date: "Jul 2024 - Present",
        place: {
          name: "Sngular",
          url: "https://linkedin.com/company/sngular",
        },
        icon: "sngular.jpeg",
        description:
          "Developed payment features and modular UI components for an Inditex back office using React, JavaScript, Sass and REST APIs. Leveraged Vitest and Cypress for testing to ensure high performance and platform reliability.",
      },
      {
        title: "Unity Developer",
        date: "Jul 2022 - Jul 2024",
        place: {
          name: "Sngular",
          url: "https://linkedin.com/company/sngular",
        },
        icon: "sngular.jpeg",
        description:
          "Led development of VR and interactive museum experiences, integrating Unity with WordPress for dynamic content. Built custom workflow tools and conducted performance profiling to ensure technical excellence and high usability.",
      },
      {
        title: "Unity Developer",
        date: "Feb 2021 - Jul 2022",
        place: {
          name: "Freelance",
          url: null,
        },
        icon: "sngular.jpeg",
        description:
          "Developed tailored interactive applications for diverse industries, optimizing multiplatform performance and loading times. Integrated Photon Engine for 3D multiplayer social spaces and provided post-delivery technical support and tuning.",
      },
    ],
  },
  education: {
    sectionName: "Education",
    items: [
      {
        title: "Degree in Video Game Development and Design",
        date: "2014 - 2020",
        place: {
          name: "Rey Juan Carlos University",
          url: "https://linkedin.com/school/universidad-rey-juan-carlos/",
        },
        icon: "urjc.jpeg",
      },
    ],
  },
  skills: {
    sectionName: "Skills",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Sass",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Vitest",
      "Jest",
      "Testing Library",
      "Cypress",
      "Git",
      "Vite",
      "Webpack",
      "Jira",
      "Flutter",
      "Dart",
      "Unity",
      "C#",
    ],
  },
  mainProjects: {
    sectionName: "Main Projects",
    items: [
      {
        name: "Inditex Back Office",
        thumbnail: "project_inditex.png",
        url: "https://inditex.com",
        description:
          "Worked on front-end features and interfaces aimed to improve an Inditex internal platform, used to manage all payments made in Inditex online stores worldwide.",
        skills: ["React", "JavaScript", "Redux", "Vitest", "Cypress"],
      },
      {
        name: "Real Madrid Museum",
        thumbnail: "project_realmadrid.png",
        url: "https://realmadrid.com/sites/tour-bernabeu",
        description:
          "Developed interactives and VR experiences for the official Real Madrid Museum. My work also focused on create reusable components to streamline team development.",
        skills: ["Unity", "C#"],
      },
      {
        name: "Qatar Olympic and Sports Museum",
        thumbnail: "project_qatar.png",
        url: "https://sngular.com/success-stories/11/faster-taller-stronger-and-more-innovative",
        description:
          "Main programmer of interactives for the Qatar Olympic and Sports Museum, including 3D minigames, motion detection with Kinect and information touch panels.",
        skills: ["Unity", "C#"],
      },
      {
        name: "SABIC Digital Experience Center",
        thumbnail: "project_sabic.png",
        url: "https://sabic.com/en",
        description:
          "Main programmer of multi-device interactives for the main headquarters of SABIC, the largest company in the Middle East.",
        skills: ["Unity", "C#"],
      },
      {
        name: "Exhibify",
        thumbnail: "project_exhibify.png",
        url: "https://exhibify.net",
        description:
          "Developed a tool to easily create virtual art exhibitions, used by artists and art galleries to exhibit or sell their work. A project commissioned by ITGallery Software.",
        skills: ["Unity", "C#"],
      },
      {
        name: "Color Rush",
        thumbnail: "project_naolito.png",
        url: "https://naolito.com",
        description:
          "A 2D runner game commissioned by Naolito Animation Studios. Worked on a playable prototype, including all main mechanics and a level editor.",
        skills: ["Unity", "C#"],
      },
      {
        name: "Uttopion",
        thumbnail: "project_uttopion.png",
        url: "https://uttopion.es",
        description:
          "Worked on adding multiplayer features and content updates for Uttopion, a metaverse where users can attend online events organized by real artists.",
        skills: ["Unity", "C#", "Photon"],
      },
      {
        name: "TodoLibros3D",
        thumbnail: "project_todolibros3d.png",
        url: "https://todolibros3d.com",
        description:
          "Added multiplayer functionality to TodoLibros3D, a virtual bookstore where now users could create their own custom avatar, interact with other users and create their own private rooms to invite their friends.",
        skills: ["Unity", "C#", "Photon"],
      },
    ],
  },
  sideProjects: {
    sectionName: "Side Projects",
    items: [
      {
        name: "WattLuz",
        thumbnail: "project_wattluz.png",
        url: "https://play.google.com/store/apps/details?id=com.menito.precioluz",
        description:
          "Mobile app that allows you to see daily prices of electricity in Spain in real time to help you save on your electricity bills.",
        skills: ["Flutter", "Dart"],
      },
      {
        name: "Nanito Launcher",
        thumbnail: "project_nanitolauncher.png",
        url: "https://play.google.com/store/apps/details?id=com.menito.minimallauncher",
        description:
          "Minimalist launcher for Android designed to reduce screen time and help you in your digital detox.",
        skills: ["Flutter", "Dart"],
      },
      {
        name: "Chupito",
        thumbnail: "project_chupito.png",
        url: "https://play.google.com/store/apps/details?id=com.menito.appcohol",
        description:
          "Party games app with challenges, funny questions and multiple game modes. My most stupid and at the same time most successful project, with +370,000 downloads.",
        skills: ["Flutter", "Dart", "Unity", "C#"],
      },
      {
        name: "Pincho.io",
        thumbnail: "project_pinchoio.png",
        url: "https://youtube.com/watch?v=eDQVwSZA6f0",
        description:
          "Mobile game inspired by Agar.io and launched in 2019, reaching +5,000 downloads. Currently unpublished due to maintenance constraints.",
        skills: ["Unity", "C#"],
      },
    ],
  },
};

export type Project = {
  title: string;
  description: string;
  githubUrl: string;
  tech: string[];
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Inventra — Android Inventory System",
    description: "Android app with Firebase for real-time storage, user auth and low-stock management.",
    githubUrl: "https://github.com/AlexanderChia05/MAD_Assignment",
    tech: ["Android", "Kotlin", "Firebase"]
  },
  {
    title: "Celestial Wedding — Event Management",
    description: "Console system for event planning: registration, reporting, CSV I/O, Excel-friendly exports.",
    githubUrl: "https://github.com/AlexanderChia05/CelestialWedding",
    tech: ["C++", "File I/O"]
  },
  {
    title: "AI Search — Maze Solver",
    description: "Uninformed / informed / local search over mazes; includes generators & benchmarks.",
    githubUrl: "https://github.com/AlexanderChia05/AI_Assignment",
    tech: ["Python", "Algorithms"]
  },
  {
    title: "JapanBoi's Frenster",
    description: "Social Media Friend Recommendation System using BFS Traversal.",
    githubUrl: "https://github.com/AlexanderChia05/DSA_Assignment",
    tech: ["Java"]
  },
  {
    title: "MyJPJ Rebuild — UI/UX Study",
    description: "Figma redesign MyJPJ to simplify government app flows.",
    githubUrl: "https://www.figma.com/proto/c7m2Tevkoms5QgEgSe4Qgp/MyJPJ-Hi-Fi?node-id=94-1512&t=VutbKZ8NElaHBFMk-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A1172&show-proto-sidebar=1",
    tech: ["Figma", "UX"]
  },
  {
    title: "Arduino Sensors Car",
    description: "Competition robot integrating infrared/ultrasonic/color sensors and servos.",
    githubUrl: "https://github.com/AlexanderChia05",
    tech: ["Arduino", "C/C++"]
  }
];

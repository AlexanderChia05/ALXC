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
    title: "Celestial Wedding — Event Management (C++)",
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
    title: "DSA Exercises (Java)",
    description: "Data structures & algorithms practice with Java models/utils and tests.",
    githubUrl: "https://github.com/AlexanderChia05/DSA_Assignment",
    tech: ["Java"]
  },
  {
    title: "SPC Coursework (C++)",
    description: "C++ coursework demonstrating vectors, templates, validation, and menu-driven programs.",
    githubUrl: "https://github.com/AlexanderChia05/SPC_Assignment",
    tech: ["C++"]
  },
  {
    title: "MyJPJ Rebuild — UI/UX Study",
    description: "Figma exploration to simplify government app flows (case study write-up pending).",
    githubUrl: "https://github.com/AlexanderChia05",
    tech: ["Figma", "UX"]
  },
  {
    title: "Arduino Sensors Car",
    description: "Competition robot integrating infrared/ultrasonic/color sensors and servos.",
    githubUrl: "https://github.com/AlexanderChia05",
    tech: ["Arduino", "C/C++"]
  }
];

export const projects = [
  {
    id: 1,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 2,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 3,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 4,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 5,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 6,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 7,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 8,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
  {
    id: 9,
    name: "Brain Tube",
    description:
      "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    techStack: ["React.js", "TailwindCss", "Node.js", "MongoDB", "Express.js"],
    image: "/project_images/braintube.png",
    visitUrl: "https://quiztube-hvw1.onrender.com/",
    sourceUrl: "https://github.com/subhankar18r/BrainTube",
  },
];
export async function GET() {
  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

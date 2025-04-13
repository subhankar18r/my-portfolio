export const projects = [
  {
    "name": "Brain Tube",
    "description": "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
    "tecknologies": ["React.js","TailwindCss", "Node.js", "MongoDB", "Express.js"],
    "image": "/project_images/braintube.png",
    "visitUrl": "https://quiztube-hvw1.onrender.com/",
    "sourceUrl": "https://github.com/subhankar18r/BrainTube"
  }
]
export async function GET(){
    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
        "Content-Type": "application/json",
        },
    });
}
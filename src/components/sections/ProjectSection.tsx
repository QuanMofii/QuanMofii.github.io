import { motion } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import BaseImage from "@/components/BaseImage";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ButtonRedirect from "../ButtonRedirect";

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Papery - Academic Document Chatbot",
    image: "/projects/project1.png",
    tags: ["Chatbot RAG", "Mathematical format document", "Translation Preserved Formats"],
    githubUrl: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Predicting Vietnamese Stock Prices",
    image: "/projects/project2.png",
    tags: ["ML", "DL", "Time Series","ARIMA","LSTM"],
    githubUrl: "https://github.com/vitdonut/Predicting_Vietnamese_Stock"
  },
  {
    id: 3,
    title: "Predict Potential Customer For The Banks",
    image: "/projects/project3.png",
    tags: ["ML", "Data Cleaning", "Data Analyst", "Prediction"],
    githubUrl: "https://github.com/vitdonut/Predict_potential_customers_for_the_banks_marketing_campaign"
  },
  {
    id: 4,
    title: "Chatbot Multi-Agent Company",
    image: "/projects/project4.png",
    tags: ["Chatbot", "LLM Local & GPT", "Multi-Agent workflow"],
    githubUrl: "https://github.com/vitdonut/Chatbot_multiagent"
  },
  
];

const ProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);


  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col container mx-auto px-4 xl:px-7 pt-15" id="project">
      <div className="flex flex-col md:flex-row justify-between mb-30">
        <AnimatedText text={"My Work"} className="text-6xl md:text-[9vw]" />
        <div className="text-sm md:text-[1.2vw] mt-5 md:mt-0 flex flex-col md:items-end item-start justify-center">
          <AnimatedText text="I build machines that think" />
          <AnimatedText text="Frontend design is my obsession" />
          <AnimatedText text="I aspire to master system architecture." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link href={project.githubUrl} key={project.id} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial={{ y: 100, opacity: 0, rotate: 5 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -100, opacity: 0, rotate: -5 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group relative overflow-hidden rounded-lg bg-white cursor-pointer"
            >
              <div className="relative h-110 overflow-hidden">
                <div className="relative shadow-2xl h-full w-full transition-transform duration-500 group-hover:scale-110">
                  <BaseImage
                    src={project.image}
                    alt={project.title}
                    className="object-fit"
                  />
                </div>
              </div>
              
              <div className="py-6">
                <div className="flex items-center mb-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  {project.tags.map((tag, i) => (
                    <div key={i} className="flex items-center shrink-0">
                      <span className="text-sm text-black">
                        {tag}
                      </span>
                      {i < project.tags.length - 1 && (
                        <span className="mx-3 inline-block w-1 h-1 bg-black rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 transition-transform duration-300 -translate-x-7 group-hover:translate-x-0">
                  <div className="text-lg font-semibold opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowRight size={20} />
                  </div>
                  <h3 className="text-3xl font-bold line-clamp-1">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center w-full h-auto my-28"><ButtonRedirect href="https://github.com/vitdonut" content="View All Projects" /></div>
    </section>
  );
};

export default ProjectSection; 
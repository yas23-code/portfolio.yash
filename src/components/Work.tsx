import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "PreOrder",
    category: "FoodTech Platform",
    tools: "TypeScript, React, Tailwind CSS, Supabase, PostgreSQL",
    image: "/images/preorderimg.png",
    about:
      "A campus pre-ordering platform that lets students place food orders in advance from college cafeterias — reducing queues, saving time between classes, and boosting canteen efficiency.",
    link: "https://preorder.food/",
  },
  {
    title: "ABES VAULT",
    category: "EdTech Platform",
    tools: "react, typescript, supabase,css,postgresql",
    image: "/images/abesvault.png",
    about:
      "ABES Vault is an EdTech platform designed for college students to easily access previous year question papers, notes, and academic resources in one organized digital repository.",
    link: "https://abes-vault.vercel.app/",
  },
  {
    title: "Bond Cancellation",
    category: "Import-Export Automation",
    tools: "Angular, Next.js, NestJS, Workflows",
    image: "/images/bond.png",
    about:
      "An automated import-export workflow system that digitises bond cancellation processes, cutting manual effort and speeding up compliance for trade operations.",
    link: "",
  },
  {
    title: "Sapphire",
    category: "CRM Platform",
    tools: "AngularJS, NestJS, PostgreSQL",
    image: "/images/sapphire.png",
    about:
      "A comprehensive CRM platform that streamlines customer relationships, tracks interactions, and provides actionable insights to help teams close deals faster.",
    link: "",
  },
  {
    title: "Mpro",
    category: "Insurance Platform",
    tools: "React.js, Node.js, Microservices",
    image: "/images/Maxlife.png",
    about:
      "A microservices-powered insurance platform enabling policy management, claims processing, and real-time reporting for large-scale insurance operations.",
    link: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        {project.about && (
                          <p className="carousel-about">{project.about}</p>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools &amp; Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-project-link"
                          >
                            View Project <FiExternalLink />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

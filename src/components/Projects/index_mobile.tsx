import { useState } from 'react'
import Image from 'next/image'
import projects from '../../data/projects'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { useThemeContext } from '../../context/ThemeContext'

interface Project {
  id: number
  slug: string
  url: string
  title: string
  type: string
  img: string
  description: string
  tech: Array<{ name: string; icon: string; rgb: string }>
  web: string
  github: string
}

export function MobileProjects() {
  const [activeDemo, setActiveDemo] = useState<{
    id: number
    url: string
    title: string
  } | null>(null)
  const { currentTheme } = useThemeContext()

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="title-wrapper">
            <HiOutlineDesktopComputer className="title-icon" />
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-subtitle">Featured Work</p>
        </div>

        <div className="projects-grid">
          {projects.slice(0, 4).map((project: Project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="image"
                  priority={index < 2}
                />
                <div className="project-type">{project.type}</div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-emoji">
                    {project.id === 2 ? '🎞🎵' : '🛍'}
                  </div>
                  <h3 className="project-title">
                    {project.title.replace(/🎞|🎵|🛍/g, '').trim()}
                  </h3>
                </div>
                
                <p className="project-description">
                  {project.description.substring(0, 120)}...
                </p>
                
                <div className="tech-stack">
                  {project.tech.slice(0, 3).map((tech) => (
                    <div key={tech.name} className="tech-tag">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="tech-icon"
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button
                    className="demo-btn"
                    onClick={() => setActiveDemo({
                      id: project.id,
                      url: project.web,
                      title: project.title
                    })}
                  >
                    🚀 Live Demo
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {activeDemo && (
        <div className="modal-overlay" onClick={() => setActiveDemo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">
                {activeDemo.title.replace(/🎞|🎵|🛍/g, '').trim()}
              </span>
              <button
                className="modal-close"
                onClick={() => setActiveDemo(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={activeDemo.url}
                className="demo-iframe"
                title={activeDemo.title}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          width: 100%;
          padding: 80px 0 60px;
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 100vw;
          padding: 0 1rem;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .title-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .title-icon {
          font-size: 2rem;
          color: #667eea;
        }

        .section-title {
          font-size: clamp(2rem, 8vw, 3rem);
          font-weight: 800;
          margin: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1rem;
          opacity: 0.7;
          margin: 0;
        }

        .projects-grid {
          display: flex;
          gap: 1rem;
          width: 100%;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 0 1rem 1rem 1rem;
          margin: 0 -1rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          flex: 0 0 280px;
          width: 280px;
          scroll-snap-align: start;
          box-sizing: border-box;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: #667eea;
        }

        .project-image {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .image {
          transform: scale(1.05);
        }

        .project-type {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .project-content {
          padding: 1rem;
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .project-emoji {
          font-size: 1.5rem;
        }

        .project-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
          color: #667eea;
          line-height: 1.3;
        }

        .project-description {
          font-size: 0.8rem;
          line-height: 1.4;
          opacity: 0.8;
          margin: 0 0 1rem 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.6rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .tech-icon {
          width: 16px;
          height: 16px;
        }

        .project-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .demo-btn,
        .github-btn {
          width: 100%;
          padding: 0.7rem 1rem;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
        }

        .demo-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .github-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .demo-btn:hover,
        .github-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-content {
          width: 100%;
          max-width: 90vw;
          height: 90vh;
          background: white;
          border-radius: 15px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: #667eea;
          color: white;
        }

        .modal-title {
          font-weight: 600;
          font-size: 1rem;
        }

        .modal-close {
          background: rgba(255, 0, 0, 0.7);
          border: none;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .modal-body {
          flex: 1;
          position: relative;
        }

        .demo-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Scrollbar styling */
        .projects-grid::-webkit-scrollbar {
          height: 4px;
        }
        
        .projects-grid::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        
        .projects-grid::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 2px;
        }

        /* Responsive breakpoints */
        @media (min-width: 480px) {
          .project-card {
            flex: 0 0 320px;
            width: 320px;
          }
          
          .project-image {
            height: 180px;
          }
          
          .project-content {
            padding: 1.2rem;
          }
          
          .project-actions {
            flex-direction: row;
            gap: 0.8rem;
          }
          
          .demo-btn,
          .github-btn {
            flex: 1;
          }
        }

        @media (min-width: 768px) {
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            overflow-x: visible;
            padding: 0;
            margin: 0;
          }
          
          .project-card {
            flex: none;
            width: 100%;
          }
          
          .project-image {
            height: 220px;
          }
          
          .project-content {
            padding: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .container {
            max-width: 1200px;
            padding: 0 3rem;
          }
        }

        /* Small screens optimization */
        @media (max-width: 320px) {
          .container {
            padding: 0;
          }
          
          .projects-grid {
            padding: 0 0.5rem 1rem 0.5rem;
            margin: 0 -0.5rem;
          }
          
          .project-card {
            flex: 0 0 260px;
            width: 260px;
          }
          
          .project-content {
            padding: 0.8rem;
          }
          
          .project-image {
            height: 140px;
          }
        }
        
        /* Scroll indicator */
        .projects-grid::after {
          content: '';
          flex: 0 0 1px;
          height: 1px;
        }
        
        @media (min-width: 768px) {
          .projects-grid::after {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
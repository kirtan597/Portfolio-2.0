import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projects from "../data/projects";
import { useThemeContext } from "../context/ThemeContext";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import Github from "../components/Github/Github";

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const { currentTheme } = useThemeContext();

  return (
    <>
      <Head>
        <title>Projects | Kirtankumar </title>
        <meta
          name="description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        />
        <meta property="og:title" content="Projects | Kirtankumar" />
        <meta
          property="og:description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        />
      </Head>

      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Project Works
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
          Here you can see some of the work I have done. Feel free to browse and
          explore the projects to see how they were created, the technologies
          used, and the features implemented.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div style={{
              textAlign: 'center',
              margin: '2rem 0 3rem 0',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem'
              }}>
                🚀 Explore My Digital Creations
              </h1>
              <p style={{
                fontSize: '1.2rem',
                opacity: 0.8,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Dive into my portfolio of innovative projects, where creativity meets technology
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '3rem',
              margin: '2rem 0',
              width: '100%',
              maxWidth: '1400px'
            }}>
            {projects.map((project, index) => {
              return (
                <div key={project.id} style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '30px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  overflow: 'hidden',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'pointer',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(0) rotateX(0deg)',
                  animation: `floatIn 1.2s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-20px) rotateX(5deg) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.4), 0 0 40px rgba(102, 126, 234, 0.3)';
                  e.currentTarget.style.border = '2px solid rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.15)';
                }}>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px 28px 0 0' }}>
                    <Image
                      width={600}
                      height={350}
                      src={project.img}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'contain',
                        transition: 'transform 0.6s ease',
                        filter: 'brightness(1.1) contrast(1.1)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      background: 'rgba(0, 0, 0, 0.8)',
                      backdropFilter: 'blur(15px)',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '25px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {project.type}
                    </div>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <h2 style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      margin: '0 0 1rem 0',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>{project.title}</h2>
                    <p style={{
                      fontSize: '1rem',
                      opacity: 0.85,
                      lineHeight: '1.6',
                      margin: '0 0 2rem 0',
                      color: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)'
                    }}>{project.description}</p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '2rem'
                    }}>
                      {project.tech.map(tag => (
                        <div key={tag.name} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: `linear-gradient(135deg, rgba(${tag.rgb}, 0.15) 0%, rgba(${tag.rgb}, 0.05) 100%)`,
                          border: `1px solid rgba(${tag.rgb}, 0.4)`,
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          <Image width={18} height={18} src={tag.icon} alt={tag.name} />
                          {tag.name}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                      <Link href={`/project/${project.url}`}>
                        <div style={{
                          padding: '1rem 1.5rem',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '20px',
                          textAlign: 'center',
                          fontWeight: '600',
                          fontSize: '1rem',
                          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem'
                        }}>View Details →</div>
                      </Link>
                      <div style={{ position: 'relative' }}>
                        <a 
                          href={project.web} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onMouseEnter={() => setHoveredButton(project.id)}
                          onMouseLeave={() => setHoveredButton(null)}
                          style={{
                            padding: '1rem 1.5rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '20px',
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer'
                          }}
                        >
                          Live Demo →
                        </a>
                        {hoveredButton === project.id && (
                          <div style={{
                            position: 'absolute',
                            top: '-320px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '300px',
                            height: '200px',
                            background: 'rgba(0, 0, 0, 0.95)',
                            borderRadius: '15px',
                            border: '2px solid rgba(102, 126, 234, 0.5)',
                            zIndex: 1000,
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(20px)',
                            animation: 'popUp 0.3s ease-out'
                          }}>
                            <iframe
                              src={project.web}
                              style={{
                                width: '200%',
                                height: '200%',
                                border: 'none',
                                borderRadius: '13px',
                                transform: 'scale(0.5)',
                                transformOrigin: 'top left'
                              }}
                              title={`Preview of ${project.title}`}
                            />
                            <div style={{
                              position: 'absolute',
                              top: '0.5rem',
                              left: '0.5rem',
                              background: 'rgba(0, 0, 0, 0.8)',
                              color: 'white',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '10px',
                              fontSize: '0.7rem',
                              fontWeight: '600'
                            }}>
                              Live Preview
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            <style jsx>{`
              @keyframes floatIn {
                0% {
                  opacity: 0;
                  transform: translateY(100px) rotateX(-15deg) scale(0.8);
                }
                50% {
                  opacity: 0.8;
                  transform: translateY(-10px) rotateX(5deg) scale(1.05);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0) rotateX(0deg) scale(1);
                }
              }
              @keyframes popUp {
                0% {
                  opacity: 0;
                  transform: translateX(-50%) translateY(20px) scale(0.8);
                }
                100% {
                  opacity: 1;
                  transform: translateX(-50%) translateY(0) scale(1);
                }
              }
            `}</style>

            
          </S.ProjectsContent>
        </S.ProjectsContainer>
        <T.Title>
          <p>../github</p>
          Github Profile
          <span>
            <HiOutlineDesktopComputer /> Stats
          </span>
        </T.Title>
        <Github />
        <p className="github">
              Hey, hey... I have more projects on{" "}
              <a href="https://github.com/kirtan597" style={{textDecoration: 'underline',}}> my GitHub </a>
              !!
        </p>
      </T.Section>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </>
  );
}

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../../data/projects';

import { ProjectsContainer, ProjectsContent } from './styles';
import { Container, Title } from '../../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

import { useThemeContext } from '../../context/ThemeContext';

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export function Projects() {

  const [activeDemo, setActiveDemo] = useState<{id: number, url: string, title: string, isMaximized: boolean} | null>(null);
  const { currentTheme } = useThemeContext();

  return (
    <Container id="projects">
      <Title>
        Works
        <span>
          <HiOutlineDesktopComputer />Project
        </span>
        <img className="vector" width={100} height={100} src="/vectors/code.svg" alt="project" />
      </Title>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '3rem',
        margin: '3rem 0',
        padding: '0 2rem',
        maxWidth: '1400px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
      {projects
        .slice(0, 2)
          .map((project, index) => (
            <div key={project.id}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '30px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                overflow: 'hidden',
                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                cursor: 'default',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transform: 'translateY(0) rotateX(0deg)',
                animation: `floatIn 1.2s ease-out ${index * 0.3}s both`,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(102, 126, 234, 0.2)';
                e.currentTarget.style.border = '2px solid rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.15)';
              }}>
                <div style={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  borderRadius: '28px 28px 0 0'
                }}>
                  <Image 
                    width={600} 
                    height={350} 
                    src={project.img} 
                    alt={project.title} 
                    {...(index < 2 ? { priority: true } : { loading: 'lazy' })}
                    quality={85}
                    style={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      transition: 'transform 0.3s ease',
                      filter: 'brightness(1.05) contrast(1.05)',
                      background: 'rgba(0, 0, 0, 0.05)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)'
                  }} />
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      fontSize: '1.5rem'
                    }} className="emoji">{project.id === 2 ? '🎞🎵' : '🛍'}</div>
                    <h2 style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      margin: '0',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>{project.title.replace(/🎞|🎵|🛍/g, '').trim()}</h2>
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    opacity: 0.85,
                    lineHeight: '1.6',
                    margin: '0 0 2rem 0',
                    color: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)'
                  }}>{project.description.substring(0, 140)}...</p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '2rem'
                  }}>
                    {project.tech.slice(0, 4).map(tag => (
                      <div key={tag.name} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: `linear-gradient(135deg, rgba(${tag.rgb}, 0.15) 0%, rgba(${tag.rgb}, 0.05) 100%)`,
                        border: `1px solid rgba(${tag.rgb}, 0.4)`,
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <Image width={18} height={18} src={tag.icon} alt={tag.name} loading="lazy" />
                        {tag.name}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <button 
                      onClick={() => setActiveDemo({id: project.id, url: project.web, title: project.title, isMaximized: false})}
                      style={{
                        padding: '1rem 1.5rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        borderRadius: '20px',
                        fontWeight: '600',
                        fontSize: '1rem',
                        border: 'none',
                        cursor: 'pointer',
                        width: '100%',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span className="emoji">🚀</span> Live Demo
                    </button>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()} 
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
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
      </div>
      
      {activeDemo && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveDemo(null);
            }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'default !important'
          }}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '90vw',
              height: '90vh',
              background: '#fff',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              cursor: 'default'
            }}>
            <div style={{
              height: '60px',
              background: '#667eea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px'
            }}>
              <span style={{ color: 'white', fontWeight: '600', fontSize: '16px' }}>
                {activeDemo.title.replace(/🎞|🎵|🛍/g, '').trim()} - Live Demo
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => window.open(activeDemo.url, '_blank')}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Open in New Tab
                </button>
                <button 
                  onClick={() => setActiveDemo(null)}
                  style={{
                    background: 'rgba(255,0,0,0.7)',
                    border: 'none',
                    color: 'white',
                    width: '35px',
                    height: '35px',
                    borderRadius: '5px',
                    cursor: 'pointer !important',
                    fontSize: '16px',
                    zIndex: 100000,
                    position: 'relative'
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
            <div style={{
              width: '100%',
              height: 'calc(100% - 60px)',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <iframe
                src={activeDemo.url}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  background: '#fff'
                }}
                onLoad={(e) => {
                  e.currentTarget.style.background = '#fff';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#666',
                fontSize: '14px',
                pointerEvents: 'none',
                zIndex: -1
              }}>
                Loading...
              </div>
            </div>
          </div>
        </div>
      )}
      

      
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
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes modalSlideIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </Container>
  );
}
import { useEffect, useState } from "react";
import { Code } from "phosphor-react";
import { Container, Title } from '../../styles/styles'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { GITHUB_USERNAME } from "../config";

export function Wakatime() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <Title>
        {currentLang === 'ta' ? 'புள்ளிவிவரங்கள்' : 'Stats'}
        <span>
          <Code /> {currentLang === 'ta' ? 'கோடிங்' : 'Coding'}
        </span>
      </Title>

      {/* Profile Header */}
      <div style={{
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '800px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 1rem 0'
        }}>Hi 👋, I'm Kirtan Panchal</h1>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#667eea',
          margin: '0 0 2rem 0'
        }}>A passionate Full Stack Developer from India</h3>
      </div>

      {/* GitHub Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        margin: '2rem 0',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {/* GitHub Stats */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <img 
            src="https://github-readme-stats.vercel.app/api?username=kirtan597&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=667eea&icon_color=764ba2&text_color=ffffff"
            alt="GitHub Stats"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
          />
        </div>

        {/* Top Languages */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kirtan597&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=667eea&text_color=ffffff"
            alt="Top Languages"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
          />
        </div>
      </div>

      {/* GitHub Streak */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <img 
          src="https://github-readme-streak-stats.herokuapp.com/?user=kirtan597&theme=radical&hide_border=true&background=0D1117&stroke=667eea&ring=764ba2&fire=667eea&currStreakLabel=ffffff"
          alt="GitHub Streak"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
      </div>

      {/* GitHub Trophies */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '1000px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>🏆 GitHub Achievements</h3>
        <img 
          src="https://github-profile-trophy.vercel.app/?username=kirtan597&theme=radical&no-frame=true&no-bg=true&margin-w=4&row=2&column=4"
          alt="GitHub Trophies"
          style={{ width: '100%', maxWidth: '900px' }}
        />
      </div>

      {/* Contribution Calendar */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '1200px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>📅 GitHub Contribution Calendar</h3>
        <img 
          src="https://ghchart.rshah.org/409ba5/kirtan597"
          alt="GitHub Contribution Calendar"
          style={{ width: '100%', maxWidth: '900px', borderRadius: '10px' }}
        />
      </div>

      {/* Activity Graph */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '1200px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>📈 Contribution Activity Graph</h3>
        <img 
          src="https://github-readme-activity-graph.vercel.app/graph?username=kirtan597&theme=react-dark&bg_color=0D1117&color=667eea&line=764ba2&point=ffffff&area=true&hide_border=true"
          alt="Activity Graph"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>

      {/* Profile Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        margin: '2rem auto',
        maxWidth: '1200px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <img 
            src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=kirtan597&theme=github_dark"
            alt="Repos per Language"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
          />
        </div>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <img 
            src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=kirtan597&theme=github_dark"
            alt="Most Commit Language"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
          />
        </div>
      </div>

      {/* Detailed Profile Summary */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '1200px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>📊 Profile Summary</h3>
        <img 
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kirtan597&theme=github_dark"
          alt="Profile Summary"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>
    </Container>
  );
}
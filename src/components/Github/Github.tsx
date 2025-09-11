import { useEffect, useState } from "react";
// Mantine
import {
  Avatar,
  Box,
  Center,
  Container,
  Group,
  Skeleton,
  Text as MantineText,
  Title as MantineTitle,
} from "@mantine/core";
import { Grid } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { useMediaQuery } from "@mantine/hooks";
// Components
import GitHubCalendar from "react-github-calendar";
import styled from 'styled-components';
import { Link } from "phosphor-react";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

// _mock & config
import { GITHUB_USERNAME } from "../config";
import github from "../../data/github.json";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  icon: {
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

type GithubUser = {
  login: string;
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  html_url: string;
};


export default function Github() {
  const [user, setUser] = useState<GithubUser>();
  const { classes } = useStyles();
  const [loading, setLoading] = useState(true);
  const [totalCommits, setTotalCommits] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const matches = useMediaQuery("(min-width: 630px)");

  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const html_url = user?.html_url;

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const data = await res.json();
    setUser(data);
    setLoading(false);
  };

  const fetchTotalCommits = async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`
    );
    const data: { total: Object } = await res.json();
    let total = Object.values(data.total).reduce((a: any, b: any) => a + b, 0);
    setTotalCommits(total);

    const res2 = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`
    );
    const data2 = await res2.json();
    let stars = data2.reduce((a: any, b: any) => a + b.stargazers_count, 0);
    setTotalStars(stars);
  };

  useEffect(() => {
    setLoading(true);
    fetchTotalCommits();
    fetchData();
  }, []);

  const BoxWrapper = styled.div<{ withBackground: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 630px) {
      margin: 1rem;
    }

    @media (max-width: 450px) {
      margin: 1rem;
    }

    @media (max-width: 350px) {
      margin: 0.125rem;
    }
  `;

  const Text = styled.p`
    font-size: 1rem;
    font-weight: 200;
    text-align: center;

    @media (max-width: 630px) {
      font-size: 0.8rem;
    }

    @media (max-width: 450px) {
      font-size: 0.7rem;
    }

    @media (max-width: 350px) {
      font-size: 0.5rem;
    }

    @media (max-width: 300px) {
      font-size: 0.2rem;
    }
  `;

  const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: 1.5rem;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      font-size: 1.25rem;
      font-weight: 500;
    }
  `;

  return (
    <section>
      <Container>
        <BoxWrapper withBackground={true} style={{ 
          flexDirection: "row", 
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          margin: "2rem auto",
          maxWidth: "600px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
        }}>
          <img
            src="/mirror image.jpg"
            alt="Kirtan's Image"
            style={{
              height: '180px',
              width: '180px',
              borderRadius: '50%',
              marginRight: '2rem',
              border: '4px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
              objectFit: 'cover'
            }}
          />
          <div style={{ flex: 1 }}>
            <Title style={{
              fontSize: '2rem',
              fontWeight: '600',
              margin: '0 0 1rem 0',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {user?.login || 'kirtan597'}
            </Title>

            <Text style={{ margin: '0.5rem 0', fontSize: '1rem', opacity: 0.9 }}>
              {currentLang === 'ta' ? 'மொத்த பின்தொடர்பவர்கள் :' : 'Total Followers :'} <span style={{ fontWeight: '600', color: '#667eea' }}>1.2K</span>
            </Text>

            <Text style={{ margin: '0.5rem 0', fontSize: '1rem', opacity: 0.9 }}>
              {currentLang === 'ta' ? 'மொத்தம் பின்தொடர்கிறது :' : 'Total Following :'} <span style={{ fontWeight: '600', color: '#667eea' }}>850</span>
            </Text>

            <Text style={{ margin: '0.5rem 0', fontSize: '1rem', opacity: 0.9 }}>
              {currentLang === 'ta' ? 'மொத்த நட்சத்திரங்கள் :' : 'Total Stars :'} <span style={{ fontWeight: '600', color: '#667eea' }}>2.5K</span>
            </Text>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
              <a href={html_url || 'https://github.com/kirtan597'} style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '25px',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}>
              {currentLang === 'ta' ? 'கிட்ஹப் சுயவிவரத்தைப் பார்வையிடவும்' : 'Visit GitHub Profile'}
              </a>
              <button onClick={() => window.open('https://github.com/kirtan597/kirtan597/blob/main/README.md', '_blank')} style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontWeight: '500',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}>
                {currentLang === 'ta' ? 'README பார்க்கவும்' : 'View README'}
              </button>
            </div>
          </div>
        </BoxWrapper>

        <BoxWrapper
          withBackground={true}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            borderRadius: '20px',
            border: "1px solid rgba(255, 255, 255, 0.08)",
            margin: '2rem auto',
            padding: '2rem',
            maxWidth: '900px',
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
          }}
        >
          <Title style={{
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.8rem',
            fontWeight: '600'
          }}>
            {currentLang === 'ta' ? 'கிட்ஹப் பங்களிப்பு' : github.contribution}
          </Title>
          <BoxWrapper withBackground={true} style={{ 
            padding: '1rem',
            overflowX: 'auto',
            width: '100%',
            maxWidth: '100%'
          }}>
            <div style={{
              minWidth: '800px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <GitHubCalendar
                username={GITHUB_USERNAME}
                blockSize={matches ? 14 : 6}
                fontSize={matches ? 14 : 8}
                blockMargin={matches ? 6 : 1}
                colorScheme="dark"
              />
            </div>
          </BoxWrapper>
        </BoxWrapper>
      </Container>
    </section>
  );
}
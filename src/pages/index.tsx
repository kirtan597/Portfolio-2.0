import Head from "next/head";
import { About } from "../components/CardAbout";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { LoadingScreen } from "../components/Animations/LoadingScreen";
import { Education } from "../components/Education";

import { Testimonials } from "../components/Testimonials";
import { Publications } from "../components/Publications";
import { Wakatime } from "../components/Coding/Wakatime";
import { Certificates } from "../components/Certificates/index";
import { Jokes } from "../components/Misc/Joke";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useLoading } from '../hooks/useLoading';
import RouteTransition from '../components/Animations/RouteTransition';
import FadeInAnimation from '../components/Animations/FadeInAnimation';
import CustomCursor from '../components/Animations/CustomCursor';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const isLoading = useLoading(3000); 

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => {}} />;
  }

  return (
    <RouteTransition>
      <Head>
        <title>{currentLang === 'ta' ? 'பஞ்சால் கிர்தன்குமாரின் போர்ட்ஃபோலியோ' : ' Panchal Kirtankumar\'s Portfolio'} </title>
      </Head>
      <CustomCursor />
      <ScrollTop />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <Section>
        <div id="home">
          <FadeInAnimation delay={0.1}>
            <HomeHero />
          </FadeInAnimation>
        </div>
        <div id="about">
          <FadeInAnimation delay={0.2}>
            <About />
          </FadeInAnimation>
        </div>
        <div id="skills">
          <FadeInAnimation delay={0.3}>
            <Skills />
          </FadeInAnimation>
        </div>
        <FadeInAnimation delay={0.4}>
          <Education />
        </FadeInAnimation>


        <FadeInAnimation delay={0.9}>
          <Publications />
        </FadeInAnimation>
        <FadeInAnimation delay={1.0}>
          <Certificates />
        </FadeInAnimation>
        <div id="projects">
          <FadeInAnimation delay={1.1}>
            <Projects />
          </FadeInAnimation>
        </div>
        <FadeInAnimation delay={1.2}>
          <Wakatime />
        </FadeInAnimation>
        <FadeInAnimation delay={1.3}>
          <Testimonials />
        </FadeInAnimation>
        <FadeInAnimation delay={1.4}>
          <Jokes />
        </FadeInAnimation>
        <div id="contact">
          <FadeInAnimation delay={1.5}>
            <CardContact />
          </FadeInAnimation>
        </div>
      </Section>

      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </RouteTransition>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
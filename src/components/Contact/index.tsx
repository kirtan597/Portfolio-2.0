/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent, ResponsiveIframeContainer, FeedbackButton } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo, LinkedinLogo, PencilSimple } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const calendy = process.env.NEXT_PUBLIC_CAL_COM_URL;
const calender = process.env.NEXT_PUBLIC_PORTFOLIO_CALENDER_URL;

export function Contact() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Section>
      <Title>
        <p>../contact</p>
        {currentLang === 'ta' ? 'தொடர்பு படிவம்' : 'Contact Form'}
        <span>
          <Envelope /> {currentLang === 'ta' ? 'தொடர்பு' : 'Contact'}
        </span>
      </Title>


      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <LinkedinLogo size={22} color="#00fffb" /> Linkedin{' '}
            </h4>
            <Link href="https://linkedin.com/in/kirtan-panchal-309760320" target="_blank">
              <span>kirtan-panchal-309760320</span>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:kirtan.2082006@gmail.com" target="_blank">
              <span>kirtan.2082006@gmail.com</span>
            </Link>
          </div>
        </ContactContent>
        <Form />
        <div className="meeting-section">
          <Title style={{ textAlign: "center" }}>
            {currentLang === 'ta' ? 'ஒரு சந்திப்பை திட்டமிடுங்கள்' : 'Schedule a Meeting'}
          </Title>
          <Description style={{ textAlign: "center", marginTop: "3px" }}>
            {currentLang === 'ta' ? 'இது Cal.com மூலம் இயக்கப்படுகிறது. எனவே, ஏற்றுவதற்கு சில நேரம் ஆகலாம். (குறிப்பு: சந்திப்பை திட்டமிட நீங்கள் Cal.com குக்கீகளை ஏற்க வேண்டும்)' : 'This is powered by Cal.com. Hence, it may take some time for loading. (Note: You have to accept the cookies by Cal.com in order to Schedule a meet)'}
          </Description>
          <ResponsiveIframeContainer>
            <iframe
              src={calendy}
              width="100%"
              height="800px"
              frameBorder="0"
              title="Cal.com"
            ></iframe>
          </ResponsiveIframeContainer>
        </div>

        <FeedbackButton onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe4In23Sjw8XnNTZ8aWop7vfwlhrxPCCmrOVC3p3OXyigd8xQ/viewform?usp=dialog', '_blank')}>
          <PencilSimple size={20} />
          {currentLang === 'ta' ? 'கருத்து எழுதுங்கள்' : 'Write a Feedback'}
        </FeedbackButton>

      </ContainerContact>
    </Section>
  );
}
/* eslint-disable @next/next/no-img-element */ 
import Image from 'next/image'
import Link from 'next/link'
import certificates from '../../data/certificates'
import certificate_img from '../../data/certificate_img'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Title } from '../../styles/styles'
import * as S from './styles'
import { GraduationCap } from 'phosphor-react'
export function Certificates() {

  return (
    <S.ContainerEducation>
      <Title>
        Highlights
        <span>
          <GraduationCap /> Certification
        </span>
      </Title>
      <S.EducationContent>
        <S.EducationList>
          {certificates &&
            certificates.map(certificates => {
              return (
                <S.List key={certificates.id}>
                  <S.ListImage>
                    <img style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                    src={certificates.logo} alt={certificates.subTitle.en} />
                    <p>
                      <span><strong>Date:</strong> {certificates.level.en} </span>
                    </p>
                    <p>
                      <span><strong>Status:</strong> {certificates.status.en}</span>
                    </p>
                  </S.ListImage>

                  <S.ListContent>
                    <h2>{certificates.title.en}</h2>
                    <h3>
                      <a href={certificates.link} download>
                        {certificates.subTitle.en}
                      </a>
                    </h3>
                    <p>{certificates.description.en?.split('\n').map((line, i) => (
                      <a key={i}>
                        {line}
                        <br />
                      </a>
                    )) || certificates.description.en}</p>
                  </S.ListContent>
                </S.List>
              );
            })}
        </S.EducationList>

        <S.EducationImage>
          <img
            className="education-logo"
            src="/education/education.svg"
            alt="boy on computer"
          />

          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1500}
          >
            {certificate_img &&
              certificate_img.map(certificate_img => {
                return (
                  <Image
                    width={500}
                    height={300}
                    className="carousel"
                    key={certificate_img.id}
                    src={certificate_img.image}
                    alt={certificate_img.name.en}
                    loading="lazy"
                  />
                )
              })}
          </Carousel>
        </S.EducationImage>
      </S.EducationContent>
    </S.ContainerEducation>
  );
}
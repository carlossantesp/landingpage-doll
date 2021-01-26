import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

function InfoSection({ lightBg,lightText,id,topLine,darkText,headLine,description,buttonLabel,img,alt,imgStart, primary, dark }) {

  console.log(img);
  return (
    <>
     <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1: 0} dark={dark ? 1 : 0} darkText={darkText ? 1 : 0} to="home">{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={ img.default } alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
     </InfoContainer>
    </>
  )
}

export default InfoSection

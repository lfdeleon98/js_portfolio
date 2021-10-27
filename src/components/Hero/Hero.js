import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Freelance Software Engineer who specializes in full-stack Python and JavaScript development.
        If I'm not freelancing, I am most likely watching '90s sitcoms on HBO Max, or getting boba with friends.
      </SectionText>
      <Button onClick={() => window.open("../PDF/LaurenDeLeon_Resume_2021.pdf", '_blank')}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
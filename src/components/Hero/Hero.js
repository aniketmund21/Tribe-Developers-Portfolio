import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br />
        Tribe Developers

      </SectionTitle>
      <SectionText>
        Tribe Developers provide App/Website Development Services for Businesses.
      </SectionText>
      <Button onClick={() => window.location = '/' }>Contact us</Button>
    </LeftSection>
  </Section>
);

export default Hero;
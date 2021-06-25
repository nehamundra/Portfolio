import React from "react";
import styled from "styled-components";
import { Card } from "primereact/card";
import profilePic from "../assets/images/profilePic.png";
import { Fieldset } from "primereact/fieldset";

const StyledRow = styled.div`
  flex-direction: row;
  display: flex;
  margin: 4rem;
  @media (max-width: 800px) {
    display: block;
    margin: 2rem;
  }
`;
const Section = styled.div`
  @media (min-width: 800px) {
    margin: 1rem;
    width: ${(props) => props.width};
  }
`;

const StyledCardImg = styled(Card)`
  border-radius: 50% !important;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  width: fit-content;
`;

const StyledCardContent = styled(Fieldset)`
  .p-fieldset-legend {
    font-size: xx-large;
    font-family: cursive;
    color: #695888;
  }
  margin-top: 5rem;
`;

const StyledTextAbout = styled.div`
  font-family: cursive;
  line-height: 2;
`;

const About = (props) => {
  return (
    <div>
      <StyledRow>
        <Section width="35%">
          <StyledCardImg>
            <img
              src={profilePic}
              style={{ borderRadius: "50%", width: "100%", height: "auto" }}
            />
          </StyledCardImg>
        </Section>
        <Section width="55%">
          <StyledCardContent legend="NEHA MUNDRA">
            <StyledTextAbout>
              Hi,
              <br />
              I am a UI developer with 3 years of experience in building and
              maintaining responsive websites.
              <br />I have keen interest in design and development of frontend for
              mobile and web application providing profound user experience
              along with animation.
              <br/> I am from Ranchi, India.
            </StyledTextAbout>
          </StyledCardContent>
        </Section>
      </StyledRow>
    </div>
  );
};

export default About;

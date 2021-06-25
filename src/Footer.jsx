import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
const StyledFooter = styled.div`
  width: 100%;

  padding: 0.5rem;
  font-weight: 600;
  font-size: x-large;
`;

const StyledContactDiv = styled.div`
  @media (max-width: 800px) {
    margin: 1rem;
  }
  color: #171717;
  &:hover {
    color: #673ab7;
    cursor: pointer;
  }
  text-align: center;
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      {/* <StyledContactDiv>
        <a
          href="https://www.linkedin.com/in/neha-mundra-676355179/"
          target="_blank"
        >
          {" "}
          <img src={Linkedin} width="30%" />
        </a>
      </StyledContactDiv>

      <StyledContactDiv>
        <a href="https://github.com/nehamundra" target="_blank">
          {" "}
          <img src={Github} width="30%" />
        </a>
      </StyledContactDiv> */}
      <StyledContactDiv onClick={() => props.history.push("/contact")}>
        Wanna Contact Me?
      </StyledContactDiv>
    </StyledFooter>
  );
};

export default withRouter(Footer);

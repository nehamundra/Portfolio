import React from "react";
import styled from "styled-components";
import { Card } from "primereact/card";
import { ProgressBar } from "primereact/progressbar";

const Skills = (props) => {
  const StyledCardContent = styled.div`
    @media (min-width: 800px) {
      display: flex;
      flex-direction: row;
    }
  `;
  const StyledDivText = styled.div`
    width: 30%;
    text-align: right;
    padding-right: 2rem;
    font-size: large;
    @media (max-width: 800px) {
      width: 100%;
      text-align: left;
    }
  `;
  const StyledDivBar = styled.div`
    width: 70%;
    @media (max-width: 800px) {
      width: 100%;
    }
  `;
  const StyledCard = styled(Card)`
    width: 70%;
    margin: auto;
    margin-top: 2rem;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2) !important;
  `;
  const StyledProgressBar = styled(ProgressBar)`
    height: 1.25rem;
    margin-top: 0.3rem;
    border-radius: 2rem;
  `;
  const skillMap = [
    { name: "React", value: 98 },
    { name: "Redux", value: 99 },
    { name: "Javascript", value: 85 },
    { name: "HTML & CSS", value: 88 },
    { name: "Firebase", value: 50 },
    { name: "React Native(expo)", value: 60 },
    { name: "Jest", value: 80 },
  ];

  return (
    <div>
      {skillMap.map((obj) => (
        <StyledCard>
          <StyledCardContent>
            <StyledDivText>{obj.name}</StyledDivText>
            <StyledDivBar>
              {" "}
              <StyledProgressBar value={obj.value}></StyledProgressBar>
            </StyledDivBar>
          </StyledCardContent>
        </StyledCard>
      ))}
    </div>
  );
};

export default Skills;

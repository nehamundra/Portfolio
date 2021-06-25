import React from "react";
import styled from "styled-components";
import { Card } from "primereact/card";
import { StyledCard } from "./Education";
import EvolentHealth from "../assets/images/evolent.png";
import Infosys from "../assets/images/infosys.png";

export const ItalicDiv = styled.div`
  font-style: italic;
`;

export const ColoredHeading = styled.h2`
  color: #673ab7;
`;

export const StyledList = styled.ul`
  list-style-type: disc;
  font-family: math;
  line-height: 1.5rem;
`;
const Experience = (props) => {
  const expArray = [
    {
      company: "Evolent Health",
      icon: EvolentHealth,
      role: "Associate Software Developer",
      from: "2020-present",
      description: [
        `Practice: Development of new responsive screens,documentation of sprint features and effort estimation of PBI’s.
    Enhancement of existing features and api calls. Provide bug
    resolution and review of other UI pull request. 
    Integration of services using Rest API and Redux Thunk along with state management in Redux.
    Writing test cases and modifying the existing ones according to business demand. Deployement to different environments.`,
        `Forest.js: Creation of new components and merging the functionalities with third party library like
        Semantic UI React, day.js,formik, styled-components, input-mask, prop-types etc along
  with unit test cases (Jest) in common library for all application UI. Maintaining demo of each component on storybook. 
  Discussions about recent releases and security vulnerabilities.`,
        `Adhere to organizational process, follow agile process on Azure
      board. Participate in hackathon competitions and volunteer for
      tech talks. Provide support for quarter release for both react and Angular applications.`,
      ],
    },
    {
      company: "Infosys",
      icon: Infosys,
      role: "System Engineer",
      from: "2018-2020",
      description: [
        `Mercedes Benz (US): Migrated 2 projects- Masterfiles and CSP to Angular7
      and Angular9 respectively along with authentication and
      authorization depending upon user roles.
      Used libraries like- Primeng, Fontawesome and Angular
      material. Provided customized validators and pipes. Implemented features like file upload, export to excel, lazy loading`,
        `Convergence: Infosys internal project to showcase their project
      build in React(frontend) and express.js(backend)`,
        `Attended training for Python and MEAN stack development in Infosys Mysore campus.`,
      ],
    },
  ];
  return (
    <div>
      <StyledCard title marginBottom="1rem">
        {expArray.map((obj, index) => (
          <>
            <div className="p-grid">
              <div className="p-sm-4 p-md-3 p-text-center">
                <img
                  src={obj.icon}
                  style={{ marginTop: "1rem", width: "6rem" }}
                />
              </div>
              <div className="p-sm-8 p-md-9">
                <ColoredHeading>{obj.company}</ColoredHeading>
                <ItalicDiv>
                  {obj.role}
                  <br /> {obj.from}
                </ItalicDiv>
              </div>
              <div>
                <StyledList>
                  {obj.description.map((desc) => (
                    <li>{desc}</li>
                  ))}
                </StyledList>
              </div>
            </div>
            {index !== expArray.length - 1 && <hr />}
          </>
        ))}
      </StyledCard>
    </div>
  );
};

export default Experience;

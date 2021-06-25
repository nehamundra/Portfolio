import React from "react";
import styled from "styled-components";
import { StyledCard } from "./Education";
import { ItalicDiv, StyledList, ColoredHeading } from "./Experience";

const VideoDiv = styled.div`
  padding: 1rem;
  text-align: center;
`;
const Projects = (props) => {
  const projArray = [
    {
      title: "Burger builder",
      tech: "React-Redux, Firebase",
      description: [
        `It consist of login/signup page. User can create their burger by adding/subtracting desired ingredients.
        it includes checkout page where total amount is displayed.
        User can see thier Orders in the Orders tab. Logout functionality also implementated.`,
        `Implementation of lazy importing of components and did authentication
    while navigation. Reactive form for registration and login purpose.`,
        `Made responsive navigation bars and pop-up modals. Implemention routing, styling of active links and authorization while
    navigating to other screen.`,
        `Used Firebase to store data, CRUD operations and deployement.`,
      ],
      demo: "https://burgerbuilder-f662b.web.app/",
    },
    {
      title: "Shop App",
      tech: "React Native(expo),React Navigation(v5), Redux, Firebase",
      description: [
        `A simple shop app with option to view all products, add desired product to the cart and Order it. 
        User can also add product and edit their perviously added product.`,
        `Login/Signup functionality implemented.`,
        `To check out demo, Please install 'expo' from playstore and scan the code or watch the video below.`,
      ],
      demo: `https://expo.io/@neha_mundra/shop-react-native`,
      video: true,
    },
  ];
  return (
    <div>
      {projArray.map((obj) => (
        <StyledCard title={obj.title}>
          <ItalicDiv>{`Tech: ${obj.tech}`}</ItalicDiv>
          <StyledList>
            {obj.description.map((desc) => (
              <li>{desc}</li>
            ))}
          </StyledList>
          <div>
            {`Check out the demo `}
            <a href={obj.demo} target="_blank">
              here
            </a>
          </div>
          {obj.video && (
            <VideoDiv>
              <iframe
                width={document.body.clientWidth > 800 ? "70%" : "100%"}
                height="315"
                src="https://www.youtube.com/embed/mVXGVyABViI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </VideoDiv>
          )}
        </StyledCard>
      ))}
      <ColoredHeading className="p-text-center">Hey, even this portfolio is built using React...</ColoredHeading>
    </div>
  );
};

export default Projects;

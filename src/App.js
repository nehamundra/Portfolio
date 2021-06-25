import "./App.css";
import React from "react";
import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Layout from "./Layout/layout";
import styled from "styled-components";
import navImages from "./assets/images/navbar.jpg";
import ScreenNav from "./Screens/ScreenNav";
import Footer from "./Footer";
const BodyDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${navImages});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ScreennContainer = styled.div`
  height: 90%;
  overflow-y: auto;
`;
const FooterConatiner = styled.div`
  bottom: 0;
  left: 0;
  height: 10%;
`;

const ScrolledDiv = styled.div`
  overflow-y: auto;
`;
function App() {
  return (
    <BodyDiv>
      <ScreennContainer>
        <Layout />

        <ScreenNav />
      </ScreennContainer>
      <FooterConatiner>
        <Footer />
      </FooterConatiner>
    </BodyDiv>
  );
}

export default App;

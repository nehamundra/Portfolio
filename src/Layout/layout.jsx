import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Button } from "primereact/button";
import SideNav from "./SideNav";

const StyledTabView = styled(TabView)`
  ul {
    justify-content: center;
  }
  ul li {
    font-size: 1.25rem;
  }
  ul li a {
    padding: 1rem !important;
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }

  @media (max-width: 800px) {
    display: none !important;
  }

  .p-tabview-panels {
    display: none !important;
  }
`;

const StyledTabView2 = styled.div`
  @media (min-width: 800px) {
    display: none !important;
  }
  padding: 1rem;
`;

const Layout = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const indexRouteMap = {
    0: "/about",
    1: "/skills",
    2: "/experience",
    3: "/projects",
    4: "/education",
  };
  return (
    <>
      <StyledTabView
        activeIndex={activeIndex}
        onTabChange={(e) => {
          setActiveIndex(e.index);
          props.history.replace(indexRouteMap[e.index]);
        }}
      >
        <TabPanel header="About" />
        <TabPanel header="Skills" />
        <TabPanel header="Experience" />
        <TabPanel header="Projects" />
        <TabPanel header="Education" />
      </StyledTabView>
      <StyledTabView2>
        <Button icon="pi pi-align-justify" onClick={(e) => setVisible(true)} />
      </StyledTabView2>
      <SideNav visible={visible} onHide={() => setVisible(false)} />
    </>
  );
};

export default withRouter(Layout);

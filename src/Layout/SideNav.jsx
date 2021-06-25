import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { ListBox } from "primereact/listbox";
import styled from "styled-components";
import { withRouter } from "react-router";

const StyledSideBar = styled(Sidebar)`
  div .p-sidebar .p-sidebar-content {
    padding: 0 !important;
  }
`;

const StyledListBox = styled(ListBox)`
   {
    border: none !important;
  }
`;

const SideNav = ({ visible, onHide, history }) => {
  const [routePath, setRoutePath] = useState("about");
  const routeSelectItems = [
    { label: "About", value: "about" },
    { label: "Skills", value: "skills" },
    { label: "Experience", value: "experience" },
    { label: "Projects", value: "projects" },
    { label: "Education", value: "education" },
  ];
  return (
    <StyledSideBar visible={visible} onHide={onHide}>
      <StyledListBox
        value={routePath}
        options={routeSelectItems}
        onChange={(e) => {
          setRoutePath(e.value);
          history.replace(`/${e.value}`);
          onHide();
        }}
      />
    </StyledSideBar>
  );
};

export default withRouter(SideNav);

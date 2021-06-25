import React from "react";
import styled from "styled-components";
import { Card } from "primereact/card";
import BookImage from "../assets/images/books.png";
export const StyledCard = styled(Card)`
  width: 70%;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2) !important;
  .p-card-content {
    @media (min-width: 800px) {
      display: ${(props) => (props.title ? "block" : "flex")};
      flex-direction: ${(props) => (props.title ? "column" : "row")};
    }
  }
  margin-bottom: ${(props) => props.marginBottom};
  @media (max-width: 800px) {
    margin-top: 1rem;
    width: 90%;
  }
  .p-card-title {
    color: #673ab7;
  }
`;

const Imagecontainer = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
const Education = (props) => {
  const eduArray = [
    {
      course: "Bachelor in Engineering",
      from: "RNS Institute of Technology (VTU)",
      location: "Bengaluru",
      marks: "77.4%",
      fromDate: "2014-2018",
    },
    {
      course: "Higher Secondary School",
      from: "D.A.V. Public School (CBSE)",
      location: "Ranchi",
      marks: "88.5%",
      fromDate: "2014",
    },
    {
      course: "Secondary School",
      from: "D.A.V. Public School (CBSE)",
      location: "Ranchi",
      marks: "95%",
      fromDate: "2012",
    },
  ];

  const CertificateArray = [
    {
      course: "React-The Complete Guide (incl Hooks, React-router and redux)",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmiiller",
      date: "Issued on June,2020",
    },
    {
      course: "React (Basic)",
      platform: "HackerRank",
      date: "Issued on June 2021",
    },
    {
      course: "React-Native (Incl SQLite, Camera Access)",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmiiller",
      date: "Issued on June,2021",
    }
  ];

  return (
    <div>
      <StyledCard className="p-grid">
        <div className="p-sm-12 p-md-6 ">
          {eduArray.map((obj, index) => (
            <div>
              <h3>{obj.course}</h3>
              <div>{`From: ${obj.from} (${obj.fromDate})`}</div>
              <div>{`Location: ${obj.location}`}</div>
              {index != eduArray.length - 1 && <hr />}
            </div>
          ))}
        </div>

        <Imagecontainer className="p-md-6">
          <img src={BookImage} width="90%" />
        </Imagecontainer>
      </StyledCard>
      <StyledCard title="CERTIFICATES" marginBottom="1rem">
        {CertificateArray.map((obj, index) => (
          <div>
            <h3>{obj.course}</h3>
            <div>{`${obj.platform} ${
              obj.instructor ? `- by ${obj.instructor}` : ""
            }`}</div>
            <div>{`${obj.date}`}</div>
            {index != CertificateArray.length - 1 && <hr />}
          </div>
        ))}
      </StyledCard>
    </div>
  );
};

export default Education;

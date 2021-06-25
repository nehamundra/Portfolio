import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import emailjs from "emailjs-com";
import Linkedin from "../assets/images/linkedin.png";
import Github from "../assets/images/github.png";
const Contact = (props) => {
  const StyledCard = styled(Card)`
    width: 50%;
    text-align: center;
    position: absolute;
    top: 20%;
    left: 25%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2) !important;

    .p-card-title {
      color: #673ab7;
    }

    @media (max-width: 800px) {
      width: 90%;
      left: 5%;
      top: 10%;
    }
  `;

  const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(event.target)
    emailjs
      .sendForm(
        "service_2vroy35",
        "template_8p04tx8",
        event.target,
        "user_Rn9kr6hJ8NWRO4pHlHaG5"
      )
      .then(
        (result) => {
          alert("Message Sent");
          event.target.reset();
        },
        (error) => {
          alert(
            "Sorry! Some error occured. Try reaching me on neha1rn14ec092@gmail.com"
          );
        }
      );
  };

  const footer = (
    <StyledFooter>
      <a
        href="https://www.linkedin.com/in/neha-mundra-676355179/"
        target="_blank"
      >
        {" "}
        <img src={Linkedin} width="30%" />
      </a>
      <a href="https://github.com/nehamundra" target="_blank">
        {" "}
        <img src={Github} width="30%" />
      </a>
    </StyledFooter>
  );
  return (
    <form onSubmit={sendEmail}>
      <StyledCard title="Contact Me" footer={footer}>
        <div className="p-fluid">
          <div className="p-field p-grid">
            <label
              htmlFor="fromName"
              className="p-col-12 p-md-4"
              style={{ justifyContent: "center" }}
            >
              Name
            </label>
            <div className="p-col-12 p-md-8">
              <InputText id="fromName" type="text" name="fromName" />
            </div>
          </div>
          <div className="p-field p-grid">
            <label
              htmlFor="contactInfo"
              className="p-col-12 p-md-4"
              style={{ justifyContent: "center" }}
            >
              Contact Info
            </label>
            <div className="p-col-12 p-md-8">
              <InputText id="contactInfo" type="text" name="contactInfo" />
            </div>
          </div>
          <div className="p-field p-grid">
            <label
              htmlFor="message"
              className="p-col-12 p-md-4"
              style={{ justifyContent: "center" }}
            >
              Message
            </label>
            <div className="p-col-12 p-md-8">
              <InputTextarea
                id="message"
                type="text"
                rows={4}
                name="message"
              />
            </div>
          </div>
        </div>
        <Button
          label="Send Message"
          className="p-button-raised p-button-text"
          type="submit"
        />
      </StyledCard>
    </form>
  );
};

export default Contact;

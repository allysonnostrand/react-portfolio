import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const ContactForm = () => {
  return (
    <div className="contactbox" id="contact">
      <div className="boxitems">
        <h3 className="contacthead">Please feel free to reach out!</h3>
        <IconContext.Provider value={{ color: "white" }}>
          <a
            className="footernav"
            style={{ padding: "0 5pc 0 0" }}
            href="https://github.com/allysonnostrand"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithubSquare className="footer-icon" />
          </a>
          <a
            className="footernav"
            href="https://linkedin.com/in/allyson-nostrand-912910154"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="footer-icon" />
          </a>
        </IconContext.Provider>
        <h4>Thank you for visiting!</h4>
      </div>
    </div>
  );
};

export default ContactForm;

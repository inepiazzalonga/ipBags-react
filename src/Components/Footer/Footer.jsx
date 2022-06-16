import React from "react";
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="redes">
        <img
          src={whatsapp}
          onClick={() => (window.location = "https://walink.co/35e4c8")}
        />

        <img
          src={linkedin}
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/ines-piazzalonga-she-her-6b3a52207/")
          }
        />

        <img
          src={github}
          onClick={() =>
            (window.location = "https://github.com/inepiazzalonga")
          }
        />

        <img
          src={instagram}
          onClick={() =>
            (window.location = "https://www.instagram.com/inepiazzalonga/")
          }
        />
      </div>
      <p>
        Copyright ©️ Inés Piazzalonga <br /> Proyecto final ReactJs
      </p>
    </footer>
  );
};

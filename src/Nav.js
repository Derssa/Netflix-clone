import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [Show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${Show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix logo"
        className="nav__logo"
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="Netflix logo"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;

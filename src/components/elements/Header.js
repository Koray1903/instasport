import React from 'react';
import "../../style/Header.css";

const Header = () => {
  return (
    <div className="LogoDiv">
      <img className="Logo" src="./logo.svg" alt="logo"/>
      <p className="LogoText">INSTASPORT</p>
    </div>
  );
};

export default Header;
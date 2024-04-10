import React from "react";
import "../style/Nav.css";
import logo from "../assets/logologo.png";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="list-nav">
          <li>
            <img className="logo" src={logo} alt="Logo" />
          </li>
          <li className="text-nav">Accueil</li>
          <li className="text-nav">Profil</li>
          <li className="text-nav">Réglages</li>
          <li className="text-nav">Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

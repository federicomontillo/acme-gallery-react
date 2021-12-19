import React from "react";

import logoFooter from "../../assets/logoFooter.png";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <nav className="navbar footer_container">
      <div className="footer_decor-footer"></div>
      <div className="container-fluid footer_content-footer">
        <a className="navbar-brand" href="#">
          <img src={logoFooter} alt="Logo Acme"/>
        </a>
        <p>© All right reserved {year}</p>
      </div>
    </nav>
  );
};

import React from "react";

function Footer() {
  var currentYear = Date().getFullYear;

  return (
    <footer>
      <p> Copyright %Copyright {currentYear} </p>
    </footer>
  );
}

export default Footer;

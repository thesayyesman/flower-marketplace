import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "0vh",
    width: "100%",
    border: "solid",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; Portrait.Co</p>
    </footer>
  );
};

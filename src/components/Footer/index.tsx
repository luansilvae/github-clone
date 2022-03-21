import React from "react";
import { Container, GithubIcon, Line } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Line />
      <GithubIcon />
      <span>This is an unofficial Github page.</span>
    </Container>
  );
};

export default Footer;

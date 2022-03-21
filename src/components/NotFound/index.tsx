import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 154px);
  padding: 16px;
  margin: 0 auto;
  max-width: 1280px;
  text-align: center;

  > h2 {
    font-size: 25px;
  }

  @media (min-width: 768px) {
    padding: 16px 32px;
    text-align: left;
  }
`;

const NotFound: React.FC<ReactNode> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default NotFound;

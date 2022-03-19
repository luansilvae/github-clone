import styled from "styled-components";

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    padding: 0 var(--horizontalPadding);
    width: 25%;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 var(--horizontalPadding);
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: 400;
  }

  > div {
    margin-top: 8px;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

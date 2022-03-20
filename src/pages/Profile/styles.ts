import styled from "styled-components";

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;
  min-height: calc(100vh - 154px);
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
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    > h2 {
      font-size: 16px;
      font-weight: 400;
    }

    > input {
      outline: 0;
      border-radius: 6px;
      background: var(--search);
      padding: 7px 12px;
      border: 1px solid var(--border);
      width: 100%;

      @media (min-width: 580px) {
        width: 40%;
      }
    }
  }

  > div {
    margin-top: 8px;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;

    .not-found {
      color: var(--gray-dark);
      margin-top: 44px;
      font-size: 14px;
      grid-column-start: span 2;
      text-align: center;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

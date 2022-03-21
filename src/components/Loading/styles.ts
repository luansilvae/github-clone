import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  min-height: calc(100vh - 154px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  > span {
    color: var(--black);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid var(--gray-dark);
    border-color: var(--gray-dark) transparent var(--gray-dark) transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

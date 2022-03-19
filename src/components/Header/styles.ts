import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    color: #dfdfdf;

    ::placeholder {
      color: #dfdfdf;
    }

    &:focus {
      ::placeholder {
        color: var(--search);
      }
    }

    @media (min-width: 768px) {
      &:focus {
        width: 318px;
      }
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;

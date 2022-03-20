import { AiOutlineFork } from "react-icons/ai";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--link);
      text-decoration: none;
      position: relative;

      &focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const BottomSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.javascript {
      background: var(--javascript);
    }
    &.html {
      background: var(--html);
    }
    &.typescript {
      background: var(--typescript);
    }
    &.html {
      background: var(--html);
    }
    &.java {
      background: var(--java);
    }
    &.kotlin {
      background: var(--kotlin);
    }
    &.lua {
      background: var(--lua);
    }
    &.css {
      background: var(--css);
    }
    &.json {
      background: var(--json);
    }
    &.markdown {
      background: var(--markdown);
    }
    &.php {
      background: var(--php);
    }
    &.python {
      background: var(--python);
    }
    &.rust {
      background: var(--rust);
    }
    &.ruby {
      background: var(--ruby);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;

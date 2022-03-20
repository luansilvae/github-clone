import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  BottomSide,
  Container,
  ForkIcon,
  RepoIcon,
  StarIcon,
  TopSide
} from "./styles";

interface CardProps {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<CardProps> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = useMemo(
    () => (language ? language.toLowerCase() : ""),
    [language]
  );

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </TopSide>
      <BottomSide>
        <ul>
          {language && (
            <li>
              <div className={`language ${languageClass}`}></div>
              <span>{language}</span>
            </li>
          )}

          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BottomSide>
    </Container>
  );
};

export default RepoCard;

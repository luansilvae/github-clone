import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIRepo } from "../../@types";
import Loading from "../../components/Loading";
import {
  BreadCrumb,
  Container,
  ForkIcon,
  GithubIcon,
  LinkButton,
  RepoIcon,
  StarIcon,
  Stats
} from "./styles";

interface Data {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();

  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`).then(
      async (response) =>
        setData(
          response.status === 404
            ? { error: "Repository not found!" }
            : { repo: await response.json() }
        )
    );
  }, [reponame, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <Loading />;
  }

  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link  className={'username'} to={`/${username}`}>
        {username}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/${username}/${reponame}`}>
        {reponame}
        </Link>
      </BreadCrumb>

      <p>{data.repo.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <strong>{data.repo.stargazers_count}</strong>
          <span>Stars</span>
        </li>
        <li>
          <ForkIcon />
          <strong>{data.repo.forks}</strong>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={data.repo.html_url}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;

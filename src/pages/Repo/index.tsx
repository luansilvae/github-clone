import React from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumb, Container, ForkIcon, GithubIcon, LinkButton, RepoIcon, StarIcon, Stats } from './styles';


const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={'username'} to={'/luansilvae'} >luansilvae</Link>
        
        <span>/</span>

        <Link className={'reponame'} to={'/luansilvae/github-clone'}>github clone</Link>
      </BreadCrumb>

      <p>Clone do github com ReactJS e Styled components</p>

      <Stats>
        <li>
          <StarIcon />
          <strong>9</strong>
          <span>Stars</span>
        </li>
        <li>
          <ForkIcon />
          <strong>0</strong>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/luansilvae'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>

    </Container>
  );
}

export default Repo;
import React from "react";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"luansilvae"}
            name={"Luan Silva"}
            avatarUrl={"https://avatars.githubusercontent.com/u/86011816?v=4"}
            followers={20}
            following={10}
            location={"Praia Grande - SP"}
            blog={"https://luansilvae.vercel.app"}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5].map(index => (
                <RepoCard 
                  key={index}
                  username={'luansilvae'}
                  reponame={'github-clone'}
                  description={'Clone da página do github com ReactJS e Styled-components'}
                  language={index % 3 === 0 ? 'Javascript' : 'Typescript' }
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;

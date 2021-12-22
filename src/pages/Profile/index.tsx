import React from 'react';

import ProfileData from '../../components/ProfileData'

import { Container, Main, LeftSide, RightSide } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'luansilvae'} 
            name={'Luan Silva'}
            avatarUrl={'https://avatars.githubusercontent.com/u/86011816?v=4'}
            followers={20}
            following={10}
            stars={0}
            location={'Praia Grande - SP'}
            blog={'https://luansilvae.vercel.app'}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  )
}

export default Profile;
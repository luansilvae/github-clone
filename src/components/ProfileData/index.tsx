import React from "react";

import { Container } from "./styles";

interface ProfileDataProps {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  stars: number;
  location: string;
  blog: string;
}

const ProfileData: React.FC<ProfileDataProps> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  stars,
  location,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
        <li>
          <StarIcon />
          <b>{stars}</b>
        </li>
      </Row>

      <Collumn>
        <li>
          
        </li>
      </Collumn>
    </Container>
  );
};

export default ProfileData;

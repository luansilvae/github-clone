import React from "react";

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  LocationIcon,
  BlogIcon,
} from "./styles";

interface ProfileDataProps {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  location?: string;
  blog?: string;
}

const ProfileData: React.FC<ProfileDataProps> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
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
          <strong>{followers}</strong>
          <span>·</span>
          <span>followers</span>
        </li>
        <li>
          <strong>{following}</strong>
          <span>following</span>
        </li>
      </Row>

      <Column>
        <li>
          <LocationIcon /> 
          <span>{location}</span>
        </li>
        <li>
          <BlogIcon /> 
          <span>{blog}</span>
        </li>
      </Column>
    </Container>
  );
};

export default ProfileData;

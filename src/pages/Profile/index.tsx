import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { APIRepo, APIUser } from "../../@types";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import { Container, LeftSide, Main, Repos, RightSide } from "./styles";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = "luansilvae" } = useParams();
  const [data, setData] = useState<Data>();
  const [filteredRepos, setFilteredRepos] = useState<APIRepo[] | undefined>([]);
  const isFetching = useMemo(
    () => !data?.user || !data?.repos || !filteredRepos,
    [data, filteredRepos]
  );

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({
          error: "User not found",
        });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });

      setFilteredRepos(repos);
    });
  }, [username]);

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const filteredRepos = data?.repos?.filter((repo) =>
        repo.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      );

      setFilteredRepos(filteredRepos);
    },
    [data]
  );

  if (data?.error) {
    return (
      <NotFound>
        <h2>{data.error}</h2>
      </NotFound>
    );
  }

  if (!data?.user || !data?.repos || !filteredRepos) {
    return <Loading />;
  }

  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            location={data.user.location}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <header>
              <h2>Repositories</h2>
              <input
                type="text"
                placeholder="Search a repository"
                onChange={handleSearch}
              />
            </header>

            <div>
              {filteredRepos.length <= 0 && (
                <span className="not-found">No repository found.</span>
              )}

              {filteredRepos.map((repo) => (
                <RepoCard
                  key={repo.name}
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks}
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

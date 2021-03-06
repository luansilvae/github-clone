import { FormEvent, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, GithubLogo, SearchForm, Wrapper } from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");

  const searchUser = useMemo(() => search.toLocaleLowerCase().trim(), [search]);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      navigate(`/${searchUser}`);
    },
    [search]
  );

  return (
    <Container>
      <Wrapper>
        <GithubLogo />
        <SearchForm onSubmit={handleSubmit}>
          <input
            placeholder="Enter username"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchForm>
      </Wrapper>
    </Container>
  );
};

export default Header;

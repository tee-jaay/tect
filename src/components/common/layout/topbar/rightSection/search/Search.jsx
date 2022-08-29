import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import {
  fetchProjects,
  searchProjects,
} from "../../../../../../store/projectSlice";

const RightSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchQuery = () => {
    if (query && query.length > 3) {
      dispatch(searchProjects(query));
    }
    if (!query) {
      dispatch(fetchProjects());
    }
  };

  useEffect(() => {
    searchQuery();
    // eslint-disable-next-line
  }, [query]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          inputProps={{
            "aria-label": "search",
            "data-cy": "top-search",
          }}
        />
      </Search>
    </>
  );
};

export default RightSearch;

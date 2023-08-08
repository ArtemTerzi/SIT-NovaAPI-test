import { useSelector } from "react-redux";
import { selectSearchHistoryList } from "redux/tracking/selectors";
import {
  Container,
  SearchesList,
  SearchesListItem,
} from "./HistoryList.styled";

const HistoryList = () => {
  const searchHistoryList = useSelector(selectSearchHistoryList);
  const reversedList = [...searchHistoryList].reverse();

  return (
    <Container>
      <h2>Search history</h2>
      <SearchesList>
        {reversedList.map(({ createdAt, Number }) => (
          <SearchesListItem key={createdAt}>{Number}</SearchesListItem>
        ))}
      </SearchesList>
    </Container>
  );
};

export default HistoryList;

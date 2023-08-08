import { useDispatch, useSelector } from "react-redux";
import { selectSearchHistoryList } from "redux/tracking/selectors";
import {
  Container,
  SearchesList,
  SearchesListItem,
} from "./HistoryList.styled";
import { getDeliveryStatus } from "redux/tracking/operations";

const HistoryList = () => {
  const searchHistoryList = useSelector(selectSearchHistoryList);
  const reversedList = [...searchHistoryList].reverse();
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(getDeliveryStatus(value));
  };

  return (
    <Container>
      <h2>Search history</h2>
      <SearchesList>
        {reversedList.map(({ createdAt, Number }) => (
          <SearchesListItem key={createdAt} onClick={() => handleClick(Number)}>
            {Number}
          </SearchesListItem>
        ))}
      </SearchesList>
    </Container>
  );
};

export default HistoryList;

import { useDispatch, useSelector } from "react-redux";
import { selectSearchHistoryList } from "redux/tracking/selectors";
import {
  ClearHistoryBtn,
  Container,
  SearchesList,
  SearchesListItem,
  TitleWrapper,
} from "./HistoryList.styled";
import { getDeliveryStatus } from "redux/tracking/operations";
import { clearSearchHistory } from "redux/tracking/trackingSlice";
import { toast } from "react-toastify";

const HistoryList = () => {
  const searchHistoryList = useSelector(selectSearchHistoryList);
  const reversedList = [...searchHistoryList].reverse();
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(getDeliveryStatus(value));
  };

  const clearHistory = () => {
    dispatch(clearSearchHistory());
    toast.success("The search history has been successfully cleared");
  };

  return (
    <>
      {reversedList.length !== 0 && (
        <Container>
          <TitleWrapper>
            <h2>Search history</h2>
            <ClearHistoryBtn type="button" onClick={clearHistory}>
              Clear
            </ClearHistoryBtn>
          </TitleWrapper>
          <SearchesList>
            {reversedList.map(({ createdAt, Number }) => (
              <SearchesListItem
                key={createdAt}
                onClick={() => handleClick(Number)}
              >
                {Number}
              </SearchesListItem>
            ))}
          </SearchesList>
        </Container>
      )}
    </>
  );
};

export default HistoryList;

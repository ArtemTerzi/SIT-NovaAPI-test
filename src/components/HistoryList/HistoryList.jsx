import { useSelector } from "react-redux";
import { selectSearchHistoryList } from "redux/tracking/selectors";

const HistoryList = () => {
  const searchHistoryList = useSelector(selectSearchHistoryList);
  const reversedList = [...searchHistoryList].reverse();

  return (
    <>
      <h2>Search history</h2>
      <ul>
        {reversedList.map((el, index) => (
          <li key={index}>{el.Number}</li>
        ))}
      </ul>
    </>
  );
};

export default HistoryList;

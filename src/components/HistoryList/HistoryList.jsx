//* Just values for test
const testArray = ["214124534643", "2141536456123", "6456745745214512"];

const HistoryList = () => {
  return (
    <>
      <h2>Search history</h2>
      <ul>
        {testArray.map((ttn, index) => (
          <li key={index}>{ttn}</li>
        ))}
      </ul>
    </>
  );
};

export default HistoryList;

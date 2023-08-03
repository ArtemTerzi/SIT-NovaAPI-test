import FindParcelForm from "components/FindParcelForm";
import HistoryList from "components/HistoryList";
import PackageInfo from "components/PackageInfo";

const TrackingPage = () => {
  return (
    <>
      <h2>Find your parcel!</h2>
      <FindParcelForm />
      <div>
        <PackageInfo />
        <HistoryList />
      </div>
    </>
  );
};

export default TrackingPage;

import FindParcelForm from "components/FindParcelForm";
import HistoryList from "components/HistoryList";
import PackageInfo from "components/PackageInfo";
import { DeatailsWrapper, Main, PageTitle } from "./TrackingPage.styled";

const TrackingPage = () => {
  return (
    <Main>
      <PageTitle>Find your parcel!</PageTitle>
      <FindParcelForm />
      <DeatailsWrapper>
        <PackageInfo />
        <HistoryList />
      </DeatailsWrapper>
    </Main>
  );
};

export default TrackingPage;

import Footer from "components/Footer";
import Header from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContainer, MainContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <GlobalContainer>
      <Header />
      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </GlobalContainer>
  );
};

export default SharedLayout;

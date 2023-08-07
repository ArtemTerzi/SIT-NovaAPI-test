import Footer from "components/Footer";
import Header from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./SharedLayout.styled";
import { ThemeProvider } from "@emotion/react";
import { theme } from "theme/theme";

const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default SharedLayout;

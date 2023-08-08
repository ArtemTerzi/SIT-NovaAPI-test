import Footer from "components/Footer";
import Header from "components/Header";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./SharedLayout.styled";
import { ThemeProvider } from "@emotion/react";
import { theme } from "theme/theme";
import Modal from "components/Modal";
import BurgerMenu from "components/BurgerMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SharedLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toogleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
      <div onClick={toogleModal}>
        <BurgerMenu iconName={isModalOpen ? "icon-cross" : "icon-menu"} />
      </div>
      <Modal open={isModalOpen} toogleModal={() => toogleModal()} />
      <ToastContainer position="bottom-right" autoClose={5000} closeOnClick />
    </ThemeProvider>
  );
};

export default SharedLayout;

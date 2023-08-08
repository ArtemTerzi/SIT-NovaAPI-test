import Navigation from "components/Navigation";
import { Backdrop } from "./Modal.styled";

const Modal = ({ open, toogleModal }) => {
  return (
    <Backdrop open={open}>
      <div onClick={toogleModal}>
        <Navigation />
      </div>
    </Backdrop>
  );
};

export default Modal;

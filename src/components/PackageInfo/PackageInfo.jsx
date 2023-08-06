import { useSelector } from "react-redux";
import { selectParcel } from "redux/tracking/selectors";
import { Container } from "./PackageInfo.styled";

const PackageInfo = () => {
  const { Status, WarehouseSender, WarehouseRecipient, Number } =
    useSelector(selectParcel);

  return (
    <Container>
      <p>
        <b>Number:</b> {Number}
      </p>
      <p>
        <b>Delivery status:</b> {Status}
      </p>
      <p>
        <b>Sent:</b> {WarehouseSender}
      </p>
      <p>
        <b>Received:</b>{" "}
        {WarehouseRecipient === "" ? "Кур'єрська доставка" : WarehouseRecipient}
      </p>
    </Container>
  );
};

export default PackageInfo;

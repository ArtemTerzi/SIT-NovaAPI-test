import { useSelector } from "react-redux";
import { selectParcel } from "redux/tracking/selectors";
import { Container, Info } from "./PackageInfo.styled";
import placeholder from "assets/images/packcage-info-placeholder.jpg";

const PackageInfo = () => {
  const { Status, WarehouseSender, WarehouseRecipient, Number } =
    useSelector(selectParcel);

  return (
    <Container>
      {!Number && (
        <img
          src={placeholder}
          width="100%"
          alt="placeholder"
          style={{ objectFit: "cover" }}
        />
      )}
      {Number && (
        <Info>
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
            {WarehouseRecipient === ""
              ? "Кур'єрська доставка"
              : WarehouseRecipient}
          </p>
        </Info>
      )}
    </Container>
  );
};

export default PackageInfo;

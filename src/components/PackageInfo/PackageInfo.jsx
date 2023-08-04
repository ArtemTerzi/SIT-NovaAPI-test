import { useSelector } from "react-redux";
import { selectParcel } from "redux/tracking/selectors";

const PackageInfo = () => {
  const { Status, WarehouseSender, WarehouseRecipient, Number } =
    useSelector(selectParcel);

  return (
    <div>
      <p>Number: {Number}</p>
      <p>Delivery status: {Status}</p>
      <p>
        <b>Sent:</b> {WarehouseSender}
      </p>
      <p>
        <b>Received:</b>{" "}
        {WarehouseRecipient === "" ? "Кур'єрська доставка" : WarehouseRecipient}
      </p>
    </div>
  );
};

export default PackageInfo;

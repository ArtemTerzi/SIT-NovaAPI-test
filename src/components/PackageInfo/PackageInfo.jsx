//* Just values for test
const Status = "Відправлення отримано";
const WarehouseSender = "Відділення №1: вул. Київська, 4";
const WarehouseRecipient = "Відділення №3 ( до 30 кг): вул. Шептицького, 26";

const PackageInfo = () => {
  return (
    <div>
      <p>Delivery status: {Status}</p>
      <p>
        <b>Sent:</b> {WarehouseSender}
      </p>
      <p>
        <b>Received:</b> {WarehouseRecipient}
      </p>
    </div>
  );
};

export default PackageInfo;

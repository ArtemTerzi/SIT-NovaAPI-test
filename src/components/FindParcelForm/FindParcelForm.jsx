import { useState } from "react";
import SearchButton from "components/SearchButton";
import { useDispatch } from "react-redux";
import { getDeliveryStatus } from "redux/tracking/operations";
import { Form, Input } from "./FindParcelForm.styled";

const FindParceleForm = () => {
  const [packageId, setPackageId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDeliveryStatus(packageId));
  };

  const handleChange = ({ target: { value } }) => setPackageId(value);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={packageId}
        onChange={handleChange}
        required
        placeholder="Write TTN Number here..."
      />
      <SearchButton title="Get Status TTN" />
    </Form>
  );
};

export default FindParceleForm;

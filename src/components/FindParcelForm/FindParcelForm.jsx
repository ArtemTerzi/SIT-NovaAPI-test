import { useState } from "react";
import SearchButton from "components/SearchButton";
import { useDispatch } from "react-redux";
import { getDeliveryStatus } from "redux/tracking/operations";
import { Container, IconWrapper, Input } from "./FindParcelForm.styled";
import Icon from "components/Icon";
import { ttnValidation } from "utils/ttnValidation";

const FindParceleForm = () => {
  const [packageId, setPackageId] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ttnValidation(packageId)) {
      setError(false);
      dispatch(getDeliveryStatus(packageId));
    } else {
      setError(true);
      console.log("Wrong Request");
    }
  };

  const handleChange = ({ target: { value } }) => {
    setPackageId(value);
  };

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Input
          value={packageId}
          onChange={handleChange}
          required
          placeholder="Write TTN Number here..."
        />
        <SearchButton title="Get Status TTN" />
        <IconWrapper type="submit">
          <Icon iconName="icon-search" width="32" height="32" />
        </IconWrapper>
      </Container>
      {error && (
        <div style={{ color: "red", marginBottom: 12 }}>
          Error: The TTN number must contain 14 digits
        </div>
      )}
    </>
  );
};

export default FindParceleForm;

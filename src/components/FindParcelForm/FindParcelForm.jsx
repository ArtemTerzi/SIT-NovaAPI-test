import { useState } from "react";
import SearchButton from "components/SearchButton";
import { useDispatch } from "react-redux";
import { getDeliveryStatus } from "redux/tracking/operations";
import { Container, IconWrapper, Input } from "./FindParcelForm.styled";
import Icon from "components/Icon";

const FindParceleForm = () => {
  const [packageId, setPackageId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDeliveryStatus(packageId));
  };

  const handleChange = ({ target: { value } }) => setPackageId(value);

  return (
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
  );
};

export default FindParceleForm;

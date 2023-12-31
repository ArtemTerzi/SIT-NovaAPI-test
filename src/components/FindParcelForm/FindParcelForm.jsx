import { useEffect, useState } from "react";
import SearchButton from "components/SearchButton";
import { useDispatch, useSelector } from "react-redux";
import { getDeliveryStatus } from "redux/tracking/operations";
import { Container, IconWrapper, Input } from "./FindParcelForm.styled";
import Icon from "components/Icon";
import { ttnValidation } from "utils/ttnValidation";
import { toast } from "react-toastify";
import { selectParcel } from "redux/tracking/selectors";

const FindParceleForm = () => {
  const [packageId, setPackageId] = useState("");
  const dispatch = useDispatch();
  const { Number } = useSelector(selectParcel);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ttnValidation(packageId)) {
      toast.success("We found your parcel!");
      dispatch(getDeliveryStatus(packageId));
    } else {
      toast.error("The TTN number must contain 14 digits");
    }
  };

  const handleChange = ({ target: { value } }) => {
    setPackageId(value);
  };

  useEffect(() => {
    if (Number !== null) setPackageId(Number);
  }, [Number]);

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Input
          value={packageId}
          onChange={handleChange}
          required
          placeholder="Write TTN Number here..."
        />
        <SearchButton title="Search" />
        <IconWrapper type="submit">
          <Icon iconName="icon-search" width="32" height="32" />
        </IconWrapper>
      </Container>
    </>
  );
};

export default FindParceleForm;

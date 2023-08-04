import { TextField } from "@mui/material";
import { useState } from "react";
import SearchButton from "components/SearchButton";
import { getParcelById } from "services/fetchService";

const FindParceleForm = () => {
  const [packageId, setPackageId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getParcelById(packageId);
  };

  const handleChange = ({ target: { value } }) => setPackageId(value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Write TTN number here"
          autoFocus
          color="secondary"
          value={packageId}
          onChange={handleChange}
          required
        />
        <SearchButton title="Get Status TTN" />
      </form>
    </div>
  );
};

export default FindParceleForm;

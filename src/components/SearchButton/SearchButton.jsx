import Button from "@mui/material/Button";

const SearchButton = ({ title }) => {
  return (
    <Button variant="contained" type="submit">
      {title}
    </Button>
  );
};

export default SearchButton;

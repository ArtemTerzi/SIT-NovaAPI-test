import { Button } from "./SearchButton.styled";

const SearchButton = ({ title }) => {
  return (
    <Button variant="contained" type="submit">
      {title}
    </Button>
  );
};

export default SearchButton;

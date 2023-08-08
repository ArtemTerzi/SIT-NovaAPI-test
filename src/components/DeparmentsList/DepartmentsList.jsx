import { useEffect, useState } from "react";
import { getCitiesList, getDepartmentsList } from "services/fetchService";
import {
  CitiesFormWrapper,
  ItemsList,
  CityInput,
  Item,
} from "./DepartmentsList.styled";

const DepartmentsList = () => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [isCityPicked, setIsCityPicked] = useState(false);
  const [departments, setDepartmens] = useState([]);

  const handleChange = ({ target: { value } }) => {
    if (isCityPicked) setIsCityPicked(false);
    setQuery(value);
  };

  const chooseDepartment = async ({ DeliveryCity, Present }) => {
    setIsCityPicked(true);
    setQuery(Present);
    setCities([]);

    const result = await getDepartmentsList(DeliveryCity);
    setDepartmens(result);
  };

  useEffect(() => {
    (async () => {
      if (!isCityPicked) {
        const result = await getCitiesList(query);
        if (Array.isArray(result)) setCities(result);
      }
    })();
  }, [isCityPicked, query]);

  return (
    <>
      <CitiesFormWrapper>
        <CityInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Write your city here"
        />
        {cities.length !== 0 && !isCityPicked && (
          <ItemsList>
            {cities.map((el) => (
              <Item key={el.Ref} onClick={() => chooseDepartment(el)}>
                {el.Present}
              </Item>
            ))}
          </ItemsList>
        )}
      </CitiesFormWrapper>
      {departments && isCityPicked && (
        <Item>
          {departments.map(({ Ref, Description }) => (
            <Item key={Ref}>{Description}</Item>
          ))}
        </Item>
      )}
    </>
  );
};

export default DepartmentsList;

import { useEffect, useState } from "react";
import { getCitiesList, getDepartmentsList } from "services/fetchService";
import {
  CitiesFormWrapper,
  ItemsList,
  CityInput,
  Item,
} from "./DepartmentsList.styled";
import { toast } from "react-toastify";

const DepartmentsList = () => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [isCityPicked, setIsCityPicked] = useState(false);
  const [departments, setDepartmens] = useState([]);
  const [isActiveError, setIsActiveError] = useState(false);

  const handleChange = ({ target: { value } }) => {
    if (isCityPicked) setIsCityPicked(false);
    setQuery(value);
  };

  const chooseDepartment = async ({ DeliveryCity, Present }) => {
    setIsCityPicked(true);
    setQuery(Present);
    setCities([]);

    const result = await getDepartmentsList(DeliveryCity);
    if (result) toast.success(`Branches in the "${Present}" was found`);
    setDepartmens(result);
  };

  useEffect(() => {
    (async () => {
      if (!isCityPicked) {
        const result = await getCitiesList(query);
        if (Array.isArray(result)) setCities(result);
        else if (!isActiveError) {
          setIsActiveError(true);

          setTimeout(() => {
            setIsActiveError(false);
          }, 3000);

          toast.error("Enter the name of the city in Ukrainian");
        }
      }
    })();
  }, [isActiveError, isCityPicked, query]);

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
        {departments && isCityPicked && (
          <ItemsList>
            {departments.map(({ Ref, Description }) => (
              <Item key={Ref}>{Description}</Item>
            ))}
          </ItemsList>
        )}
      </CitiesFormWrapper>
    </>
  );
};

export default DepartmentsList;

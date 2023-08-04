import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getCitiesList, getDepartmentsList } from "services/fetchService";

const DepartmentsPage = () => {
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
        setCities(result);
      }
    })();
  }, [isCityPicked, query]);

  return (
    <>
      <TextField type="text" value={query} onChange={handleChange} />
      {cities && !isCityPicked && (
        <ul>
          {cities.map((el) => (
            <li key={el.Ref} onClick={() => chooseDepartment(el)}>
              {el.Present}
            </li>
          ))}
        </ul>
      )}
      {departments && isCityPicked && (
        <ul>
          {departments.map(({ Ref, Description }) => (
            <li key={Ref}>{Description}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DepartmentsPage;

import { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryNames } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleDropdownChange }) => {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    const getCountryNames = async () => {
      setCountryNames(await fetchCountryNames());
    };

    getCountryNames();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleDropdownChange(e.target.value)}
      >
        <option value="">Global</option>
        {countryNames.map((countryName, index) => {
          return (
            <option key={index} value={countryName}>
              {countryName}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

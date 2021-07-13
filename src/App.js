import { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchCardsData } from "./api";
import covid_tracker_image from "./images/covid_tracker_image.png";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState({});

  const [country, setCountry] = useState("");

  useEffect(() => {
    const getCardsData = async () => {
      setData(await fetchCardsData());
    };

    getCardsData();
  }, []);

  const handleDropdownChange = async (selectedDropdownItem) => {
    setData(await fetchCardsData(selectedDropdownItem));
    setCountry(selectedDropdownItem);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={covid_tracker_image} alt="" />
      <Cards data={data} />
      <CountryPicker handleDropdownChange={handleDropdownChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;

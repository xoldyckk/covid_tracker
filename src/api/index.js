import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchCardsData = async (selectedDropdownItem) => {
  let changeableURL = url;

  if (selectedDropdownItem) {
    changeableURL = `${url}/countries/${selectedDropdownItem}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableURL);

    return { confirmed, recovered, deaths, lastUpdate, selectedDropdownItem };
  } catch (error) {
    return error.message;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });
  } catch (error) {
    return error.message;
  }
};

export const fetchCountryNames = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => {
      return country.name;
    });
  } catch (error) {
    return error.message;
  }
};

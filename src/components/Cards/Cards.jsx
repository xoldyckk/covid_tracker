import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Cards = ({
  data: { confirmed, deaths, lastUpdate, recovered, selectedDropdownItem },
}) => {
  if (!confirmed) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <Typography variant="h4" component="h2" gutterBottom>
        {!selectedDropdownItem ? "Global" : selectedDropdownItem}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;

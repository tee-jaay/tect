import { Grid } from "@mui/material";
import StatCard from "./card/StatCard";
import useStyles from "./styles";
//import ContentLoader from "../../common/loader/ContentLoader";

const StatCards = ({ projects, tasks, issues, meetings, pending }) => {
  const classes = useStyles();

  const cards = [
    {
      value: projects,
      icon: "parcel",
      subtitle: "Projects",
      color: "green",
    },
    { value: tasks, icon: "task", subtitle: "Tasks", color: "blue" },
    {
      value: issues,
      icon: "event",
      subtitle: "Meetings",
      color: "yellow",
    },
    { value: meetings, icon: "bug", subtitle: "Issues", color: "pink" },
  ];

  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        {pending && cards.map((item, index) => (
          <StatCard
            key={index}
            value={"0"}
            icon={""}
            subtitle={item.subtitle}
            color={item.color}
          />
        )
        )}

        {!pending &&
          cards &&
          cards.map((card, index) => (
            <StatCard
              key={index}
              value={card.value}
              icon={card.icon}
              subtitle={card.subtitle}
              color={card.color}
            />
          ))}
      </Grid>
    </>
  );
};

export default StatCards;

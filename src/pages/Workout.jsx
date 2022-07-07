import { React, useState } from "react";
import { View } from "react-native";

import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";

import styles from "../styles/workout.styles";

const WorkoutScreen = () => {
  const [page, setPage] = useState("list");

  function changePage() {
    setPage(page === "list" ? "form" : "list");
  }

  if (page == "form") {
    return (
      <View style={styles.container}>
        <WorkoutForm changePage={changePage} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WorkoutList changePage={changePage} />
    </View>
  );
};

export default WorkoutScreen;

import { React, useState } from "react";
import { View } from "react-native";

import List from "./List";
import Form from "./Form";

import styles from "../../styles/workout.styles";

const WorkoutScreen = () => {
  const [page, setPage] = useState("list");

  function changePage() {
    setPage(page === "list" ? "form" : "list");
  }

  if (page == "form") {
    return (
      <View style={styles.container}>
        <Form callBack={changePage} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <List callBack={changePage} />
    </View>
  );
};

export default WorkoutScreen;

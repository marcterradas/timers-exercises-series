import { React, useState } from "react";
import { View, ScrollView, Button } from "react-native";
import ActionButton from "../../components/ActionButton";
import List from "./List";
import Form from "./Form";
import styles from "../../styles/workout.styles";
import { t } from "i18next";

const WorkoutScreen = () => {
  const [page, setPage] = useState("list");

  function changePage() {
    setPage(page === "list" ? "form" : "list");
  }

  return (
    <View style={styles.container}>
      <ScrollView>{page == "list" ? <List /> : <Form />}</ScrollView>
      <ActionButton label={t("change_page")} method={changePage} />
    </View>
  );
};

export default WorkoutScreen;

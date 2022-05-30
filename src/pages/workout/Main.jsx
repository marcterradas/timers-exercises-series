import { React, useState } from "react";
import { View, ScrollView } from "react-native";
import ActionButton from "../../components/ActionButton";
import List from "./List";
import Form from "./Form";
import styles from "../../styles/workout.styles";
import { t } from "i18next";

const WorkoutScreen = () => {
  const [page, setPage] = useState("list");
  const [actionLabel, setActionLabel] = useState(t("workout_add"));

  function changePage() {
    setPage(page === "list" ? "form" : "list");
    setActionLabel(
      page === "list" ? t("return_workout_list") : t("workout_add")
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.subContainer}>
        {page == "list" ? <List /> : <Form />}
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton label={actionLabel} method={changePage} />
      </View>
    </View>
  );
};

export default WorkoutScreen;

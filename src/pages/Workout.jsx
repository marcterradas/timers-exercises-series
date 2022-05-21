import { React, useState } from "react";
import { View, ScrollView, Button } from "react-native";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";
import styles from "../styles/workout.styles";
import { t } from "i18next";

const WorkoutScreen = () => {
  const [page, setPage] = useState("list");

  function changePage() {
    setPage(page === "list" ? "form" : "list");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {page == "list" ? <WorkoutList /> : <WorkoutForm />}
      </ScrollView>
      <View style={styles.actionContainer}>
        <Button
          onPress={() => {
            changePage();
          }}
          style={styles.button}
          title={t("change_page")}
          accessibilityLabel={t("change_page")}
        ></Button>
      </View>
    </View>
  );
};

export default WorkoutScreen;

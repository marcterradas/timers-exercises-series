import { React, useState } from "react";
import { View, ScrollView, Button } from "react-native";
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

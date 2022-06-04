import { React, useState } from "react";
import { View, ScrollView } from "react-native";
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
      <ScrollView style={styles.subContainer}>
        {page == "list" ? <List /> : <Form />}
      </ScrollView>
      <View style={styles.actionContainer}>
        {page == "list" ? (
          <ActionButton
            label={t("add")}
            type="actionButton"
            method={changePage}
          />
        ) : (
          <>
            <ActionButton
              label={t("return")}
              type="backButton"
              method={changePage}
            />
            <ActionButton
              label={t("save")}
              type="actionButton"
              method={changePage}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default WorkoutScreen;

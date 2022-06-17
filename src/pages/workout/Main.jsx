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

  function saveWorkout() {
    console.log("save workout");
  }

  const ListButtons = () => {
    return (
      <ActionButton
        label={t("add")}
        type="actionButton"
        callBack={changePage}
      />
    );
  };

  const FormButtons = () => {
    return (
      <>
        <ActionButton
          label={t("return")}
          type="backButton"
          callBack={changePage}
        />
        <ActionButton
          label={t("save")}
          type="actionButton"
          callBack={saveWorkout}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.subContainer}>
        {page == "list" ? <List /> : <Form />}
      </ScrollView>
      <View style={styles.actionContainer}>
        {page == "list" ? <ListButtons /> : <FormButtons />}
      </View>
    </View>
  );
};

export default WorkoutScreen;

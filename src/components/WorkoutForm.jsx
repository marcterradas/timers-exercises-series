import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/workout.styles";

const WorkoutForm = (t) => {
  function saveWorkout() {
    console.log("save workout ...");
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>{t("new_workout")}</Text>
      <Text>{t("workout_name")}</Text>
      <TextInput style={styles.input}></TextInput>
      <Button
        onPress={saveWorkout}
        style={styles.button}
        title={t("save")}
        accessibilityLabel={t("save")}
      ></Button>
    </View>
  );
};

export default WorkoutForm;

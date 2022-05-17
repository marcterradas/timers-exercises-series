import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/workout.styles";

const WorkoutForm = (t) => {
  function saveWorkout() {
    console.log("save workout ...");
  }

  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <View>
        <Text>{t("workout_name")}</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.actionContainer}>
        <Button
          onPress={saveWorkout}
          style={styles.button}
          title={t("save")}
          accessibilityLabel={t("save")}
        ></Button>
      </View>
    </View>
  );
};

export default WorkoutForm;

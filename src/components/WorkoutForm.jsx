import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/workout.styles";

const WorkoutForm = (t) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>{t("new_workout")}</Text>
      <Text>{t("workout_name")}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default WorkoutForm;

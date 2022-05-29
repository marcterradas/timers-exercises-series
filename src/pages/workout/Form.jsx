import { React, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useTranslation } from "react-i18next";

import AddWorkout from "../../components/AddWorkout";

import styles from "../../styles/workout.styles";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [numerExercices, setNumberExercices] = useState(0);
  const [title, setTitle] = useState("");

  return (
    <View>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <View>
        <Text>{t("number_exercices", { number: numerExercices })}</Text>
      </View>
      <View style={styles.containerJustifyLeft}>
        <Text>{t("workout_name")}</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      </View>
      <View style={styles.container}>
        <AddWorkout setNumberExercices={setNumberExercices} />
      </View>
    </View>
  );
};

export default WorkoutForm;

import { React, useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { useTranslation } from "react-i18next";

import AddWorkout from "../../components/AddWorkout";
import styles from "../../styles/workout.styles";
import { getData } from "../../logic/workout";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");

  useEffect(function () {
    const data = getData();
    console.log(data);
  }, []);

  return (
    <View>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <View style={styles.containerJustifyLeft}>
        <Text style={styles.label}>{t("workout_name")}</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      </View>
      <View style={styles.container}>
        <AddWorkout />
      </View>
    </View>
  );
};

export default WorkoutForm;

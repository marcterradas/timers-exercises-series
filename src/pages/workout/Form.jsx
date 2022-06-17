import { React, useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../../styles/workout.styles";
import { getWorkouts } from "../../logic/workout";

import AddWorkout from "../../components/AddWorkout";
import Input from "../../components/Input";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");

  useEffect(function () {
    const data = getWorkouts();
    console.log(data);
  }, []);

  return (
    <View>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <Input label="workout_name" callBack={setTitle} type="default" />
      <View style={styles.container}>
        <AddWorkout />
      </View>
    </View>
  );
};

export default WorkoutForm;

import { React, useState } from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import AddWorkout from "../../components/AddWorkout";

import styles from "../../styles/workout.styles";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [numerExercices, setNumberExercices] = useState(0);
  return (
    <View>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <View>
        <Text>{t("number_exercices", { number: numerExercices })}</Text>
      </View>
      <AddWorkout setNumberExercices={setNumberExercices} />
    </View>
  );
};

export default WorkoutForm;

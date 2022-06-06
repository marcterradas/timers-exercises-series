import { React } from "react";
import { Text, TouchableOpacity } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { t } from "i18next";

import styles from "../styles/workout.styles";

const AddWorkout = () => {
  const icon = {
    name: "add-circle-outline",
    size: 40,
    color: "black",
  };

  function addExercice() {
    console.log("add exercice");
  }

  return (
    <TouchableOpacity onPress={addExercice} style={styles.bigButton}>
      <IonIcon name={icon.name} size={icon.size} color={icon.color} />
      <Text style={styles.buttonText}>{t("add")}</Text>
    </TouchableOpacity>
  );
};

export default AddWorkout;

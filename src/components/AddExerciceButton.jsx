import React from "react";
import { Text, TouchableOpacity } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { t } from "i18next";

import styles from "../styles/workout.styles";

const AddExerciceButton = ({ callBack }) => {
  const icon = {
    name: "add-circle-outline",
    size: 40,
    color: "black",
  };

  return (
    <TouchableOpacity onPress={() => callBack()} style={styles.bigButton}>
      <IonIcon name={icon.name} size={icon.size} color={icon.color} />
      <Text style={styles.buttonText}>{t("add")}</Text>
    </TouchableOpacity>
  );
};

export default AddExerciceButton;

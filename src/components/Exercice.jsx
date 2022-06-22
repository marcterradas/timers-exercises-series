import { React } from "react";
import { TouchableOpacity, Text } from "react-native";
import { t } from "i18next";

import styles from "../styles/workout.styles";

const Exercice = ({ name, repetitions, breakTime, callBack }) => {
  return (
    <TouchableOpacity onPress={() => callBack()} style={styles.exerciceButton}>
      <Text style={styles.exerciceTitle}>{name}</Text>
      <Text>{t("exercice_number_repetitions", { number: repetitions })}</Text>
      <Text>{t("exercice_break_time", { number: breakTime })}</Text>
    </TouchableOpacity>
  );
};

export default Exercice;

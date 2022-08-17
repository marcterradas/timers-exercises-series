import { React, useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../styles/timers.styles";

import ActionButton from "./ActionButton";

const WorkoutTimer = ({ workout, callBack }) => {
  const { t } = useTranslation();
  const [name, exercices] = workout;
  const [currentExercice, setCurrentExercice] = useState(false);

  function getNextExercice() {
    const exercice = exercices.shift();

    if (typeof exercice === "undefined") {
      callBack();
      return false;
    }

    setCurrentExercice(exercice);
  }

  useEffect(getNextExercice, []);

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton
          label={t("return")}
          type="backButton"
          callBack={callBack}
        />
      </View>
    </>
  );
};

export default WorkoutTimer;

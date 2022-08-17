import { React, useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../styles/timers.styles";

import ExerciceTimer from "./ExerciceTimer";
import ActionButton from "./ActionButton";

const WorkoutTimer = ({ workout, callBack }) => {
  const { t } = useTranslation();
  const [name, exercices] = workout;
  const [currentExercice, setCurrentExercice] = useState(<ExerciceTimer />);

  function getNextExercice() {
    const exercice = exercices.shift();

    if (typeof exercice === "undefined") {
      callBack();
      return false;
    }

    setCurrentExercice(<ExerciceTimer exercice={exercice} />);
  }

  useEffect(getNextExercice, []);

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.container}>{currentExercice}</View>
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

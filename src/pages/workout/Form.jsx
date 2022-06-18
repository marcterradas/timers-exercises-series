import { React, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../../styles/workout.styles";
import { getWorkouts } from "../../logic/workout";
import { cleanString, cleanNumber } from "../../logic/helpers";

import ActionButton from "../../components/ActionButton";
import AddExerciceButton from "../../components/AddExerciceButton";
import Input from "../../components/Input";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [exercices, setExercices] = useState([]);
  let title = "";
  let name = "";
  let repetitions = 0;
  let breakTime = 0;

  const updateTitle = (value) => (title = cleanString(value));
  const updateName = (value) => (name = cleanString(value));
  const updateRepetitions = (value) => (repetitions = cleanNumber(value));
  const updateBreakTime = (value) => (breakTime = cleanNumber(value));
  const fnShowForm = () => setShowForm(true);
  const showButton = () => setShowForm(false);

  function saveExercice() {
    const exercice = { name, repetitions, breakTime };
    exercices.push(exercice);
    showButton();
  }

  useEffect(function () {
    const data = getWorkouts();
    console.log(data);
  }, []);

  const Form = () => {
    return (
      <View style={styles.justifyContainer}>
        <Input label="exercice_name" callBack={updateName} type="default" />
        <Input
          label="number_repetitions"
          callBack={updateRepetitions}
          type="numeric"
        />
        <Input label="break_time" callBack={updateBreakTime} type="numeric" />
        <View style={styles.actionContainer}>
          <ActionButton
            label={t("cancel")}
            type="backButton"
            callBack={showButton}
          />
          <ActionButton
            label={t("save")}
            type="actionButton"
            callBack={saveExercice}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <Input label="workout_name" callBack={updateTitle} type="default" />
      <View style={styles.container}>
        {showForm ? <Form /> : <AddExerciceButton callBack={fnShowForm} />}
      </View>
    </View>
  );
};

export default WorkoutForm;

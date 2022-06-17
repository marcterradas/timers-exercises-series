import { React, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../../styles/workout.styles";
import { getWorkouts } from "../../logic/workout";

import ActionButton from "../../components/ActionButton";
import AddExerciceButton from "../../components/AddExerciceButton";
import Input from "../../components/Input";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [exercices, setExercices] = useState([]);
  let name = "";
  let repetitions = 0;
  let breakTime = 0;

  function updateName(newName) {
    name = newName.trim();
  }

  function updateRepeitions(newRepeitions) {
    const newRepetitions = parseInt(newRepeitions);
    repetitions =
      !isNaN(newRepetitions) && newRepeitions > 0 ? newRepeitions : 1;
  }

  function updateTime(newTime) {
    const newBreakTime = parseInt(newTime);
    breakTime = !isNaN(newBreakTime) && newTime > 0 ? newTime : 0;
  }

  function fnShowForm() {
    setShowForm(true);
  }

  function showButton() {
    setShowForm(false);
  }

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
          callBack={updateRepeitions}
          type="numeric"
        />
        <Input label="break_time" callBack={updateTime} type="numeric" />
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
      <Input label="workout_name" callBack={setTitle} type="default" />
      <View style={styles.container}>
        {showForm ? <Form /> : <AddExerciceButton method={fnShowForm} />}
      </View>
    </View>
  );
};

export default WorkoutForm;

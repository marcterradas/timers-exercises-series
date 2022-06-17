import { React, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { t } from "i18next";

import ActionButton from "./ActionButton";
import AddExerciceButton from "./AddExerciceButton";
import Input from "./Input";

import styles from "../styles/workout.styles";

const AddWorkout = () => {
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

  return showForm ? <Form /> : <AddExerciceButton method={fnShowForm} />;
};

export default AddWorkout;

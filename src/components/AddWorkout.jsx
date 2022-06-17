import { React, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { t } from "i18next";

import ActionButton from "./ActionButton";
import AddExercice from "./AddExercice";

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
        <View style={styles.containerJustifyLeft}>
          <Text style={styles.label}>{t("exercice_name")}</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newName) => updateName(newName)}
          />
        </View>
        <View style={styles.containerJustifyLeft}>
          <Text style={styles.label}>{t("number_repetitions")}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(newRepeitions) => updateRepeitions(newRepeitions)}
          />
        </View>
        <View style={styles.containerJustifyLeft}>
          <Text style={styles.label}>{t("break_time")}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(newTime) => updateTime(newTime)}
          />
        </View>
        <View style={styles.actionContainer}>
          <ActionButton
            label={t("cancel")}
            type="backButton"
            method={showButton}
          />
          <ActionButton
            label={t("save")}
            type="actionButton"
            method={saveExercice}
          />
        </View>
      </View>
    );
  };

  return showForm ? <Form /> : <AddExercice method={fnShowForm} />;
};

export default AddWorkout;

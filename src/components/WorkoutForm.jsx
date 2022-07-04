import { React, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../styles/workout.styles";
import { cleanString, cleanNumber } from "../logic/helpers";

import ActionButton from "./ActionButton";
import AddExerciceButton from "./AddExerciceButton";
import Input from "./Input";
import Exercice from "./Exercice";
import PopupExercice from "./PopupExercice";
import ExerciceForm from "./ExerciceForm";

const WorkoutForm = ({ callBack }) => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [exercices, setExercices] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(-1);
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

  function saveWorkout() {
    console.log("save workout ...");
  }

  function saveExercice() {
    exercices.push({ name, repetitions, breakTime });
    showButton();
  }

  function openExercicePopup(index) {
    setIndex(index);
    setShowPopup(true);
  }

  function removeExercice(index) {
    const exercicesCopy = JSON.parse(JSON.stringify(exercices));
    exercicesCopy.splice(index, 1);
    setExercices(exercicesCopy);
    setShowPopup(false);
  }

  const ExercicesComponents = exercices.map(
    ({ name, repetitions, breakTime }, index) => {
      return (
        <Exercice
          key={index}
          index={index}
          name={name}
          repetitions={repetitions}
          breakTime={breakTime}
          callBack={openExercicePopup}
        />
      );
    }
  );

  const List = () => {
    return (
      <>
        <AddExerciceButton callBack={fnShowForm} />
        {ExercicesComponents}
      </>
    );
  };

  if (showPopup) {
    const { name, repetitions, breakTime } = exercices[index];
    return (
      <PopupExercice
        index={index}
        name={name}
        repetitions={repetitions}
        breakTime={breakTime}
        setShowPopup={setShowPopup}
        removeExercice={removeExercice}
      />
    );
  }

  if (showForm) {
    return (
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{t("new_workout")}</Text>
        </View>
        <Input label="workout_name" callBack={updateTitle} type="default" />
        <View style={styles.container}>
          <ExerciceForm
            updateName={updateName}
            updateRepetitions={updateRepetitions}
            updateBreakTime={updateBreakTime}
            showButton={showButton}
            saveExercice={saveExercice}
          />
        </View>
      </ScrollView>
    );
  }

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{t("new_workout")}</Text>
        </View>
        <Input label="workout_name" callBack={updateTitle} type="default" />
        <View style={styles.container}>
          <List />
        </View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton
          label={t("return")}
          type="backButton"
          callBack={callBack}
        />
        <ActionButton
          label={t("save")}
          type="actionButton"
          callBack={saveWorkout}
        />
      </View>
    </>
  );
};

export default WorkoutForm;

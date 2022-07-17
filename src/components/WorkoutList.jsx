import { React, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { getWorkouts, removeWorkout } from "../logic/workout";

import WorkoutElement from "./WorkoutElement";
import ActionButton from "./ActionButton";
import WorkoutForm from "./WorkoutForm";

import styles from "../styles/workout.styles";

const WorkoutList = ({ changePage }) => {
  const { t } = useTranslation();
  const [workoutsElements, setWorkoutsElements] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedWorkoutIndex, setSelectedWorkoutIndex] = useState(false);
  const [selectedWorkoutElement, setSelectedWorkoutElement] = useState(false);

  const edit = () => setShowPopup(false);
  const returnToList = () => setSelectedWorkoutElement(false);

  function closePopup() {
    setSelectedWorkoutIndex(false);
    setShowPopup(false);
    setSelectedWorkoutElement(false);
  }

  async function remove() {
    await removeWorkout(selectedWorkoutIndex);
    closePopup();
    loadWorkouts();
  }

  async function openWorkout(index) {
    const workouts = await getWorkouts();

    let [id, workout] = workouts[index];
    workout = Object.values(JSON.parse(workout));

    let [title, exercices] = workout;

    const workoutElement = (
      <WorkoutForm
        changePage={returnToList}
        propId={id}
        propTitle={title}
        propExercices={exercices}
      />
    );

    setSelectedWorkoutIndex(index);
    setShowPopup(true);
    setSelectedWorkoutElement(workoutElement);
  }

  async function loadWorkouts() {
    const workouts = await getWorkouts();
    const workoutElements = [];

    for (let index in workouts) {
      let [id, workout] = workouts[index];
      workout = Object.values(JSON.parse(workout));

      const [title, exercices] = workout;
      const workoutElement = (
        <WorkoutElement
          key={id}
          index={index}
          title={title}
          callBack={openWorkout}
        />
      );
      workoutElements.push(workoutElement);
    }
    setWorkoutsElements(workoutElements);
  }

  useEffect(loadWorkouts, []);

  if (showPopup) {
    return (
      <View style={styles.container}>
        <ActionButton
          label={t("edit")}
          type="centerActionButton"
          callBack={edit}
        />
        <ActionButton
          label={t("delete")}
          type="centerRemoveButton"
          callBack={remove}
        />
        <ActionButton
          label={t("return")}
          type="centerBackButton"
          callBack={closePopup}
        />
      </View>
    );
  }

  if (selectedWorkoutElement) {
    return selectedWorkoutElement;
  }

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{t("workout_list")}</Text>
        </View>
        <View>{workoutsElements}</View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton
          label={t("add")}
          type="actionButton"
          callBack={changePage}
        />
      </View>
    </>
  );
};

export default WorkoutList;

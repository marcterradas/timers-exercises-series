import { React, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { getWorkouts } from "../logic/workout";

import WorkoutElement from "./WorkoutElement";
import ActionButton from "./ActionButton";
import WorkoutForm from "./WorkoutForm";

import styles from "../styles/workout.styles";

const WorkoutList = ({ changePage }) => {
  const { t } = useTranslation();
  const [workoutsElements, setWorkoutsElements] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(false);

  const returnToList = () => setSelectedWorkout(false);

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
    setSelectedWorkout(workoutElement);
  }

  useEffect(async () => {
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
  }, []);

  if (selectedWorkout) {
    return selectedWorkout;
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

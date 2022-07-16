import { React, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { getWorkouts } from "../logic/workout";

import WorkoutElement from "./WorkoutElement";
import ActionButton from "./ActionButton";

import styles from "../styles/workout.styles";

const WorkoutList = ({ changePage }) => {
  const { t } = useTranslation();
  const [workouts, setWorkouts] = useState([]);

  function openWorkout(index) {
    console.log("open workout ...");
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
    setWorkouts(workoutElements);
  }, []);

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{t("workout_list")}</Text>
        </View>
        <View>{workouts}</View>
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

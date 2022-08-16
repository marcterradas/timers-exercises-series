import { React, useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import WorkoutElement from "../components/WorkoutElement";
import WorkoutTimer from "../components/WorkoutTimer";

import { getWorkouts } from "../logic/workout";

import styles from "../styles/timers.styles";

const TimerScreen = () => {
  const { t } = useTranslation();
  const [workoutsElements, setWorkoutsElements] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(false);

  async function openWorkout(index) {
    const workouts = await getWorkouts();
    let [id, workout] = workouts[index];
    workout = Object.values(JSON.parse(workout));
    setSelectedWorkout(workout);
  }

  function closeWorkout() {
    setSelectedWorkout(false);
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

  if (selectedWorkout) {
    return (
      <View style={styles.container}>
        <WorkoutTimer workout={selectedWorkout} callBack={setSelectedWorkout} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{t("workout_list")}</Text>
        </View>
        <View>{workoutsElements}</View>
      </ScrollView>
    </View>
  );
};

export default TimerScreen;

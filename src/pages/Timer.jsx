import { React, useEffect, useState } from "react";
import { View, Text } from "react-native";

import WorkoutElement from "../components/WorkoutElement";

import { getWorkouts } from "../logic/workout";

const TimerScreen = () => {
  const [workoutsElements, setWorkoutsElements] = useState([]);

  async function openWorkout(index) {}

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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Timer Screen ...</Text>
    </View>
  );
};

export default TimerScreen;

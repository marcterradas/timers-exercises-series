import { React, useState } from "react";
import { View, Text } from "react-native";

import {
  secondsToMinutes,
  minutesToSeconds,
  substractOneSecond,
} from "../logic/timer.js";

const ExerciceTimer = ({ exercice = {} }) => {
  const { name, repetitions, breakTime } = exercice;
  const [time, setStime] = useState(secondsToMinutes(breakTime));
  return (
    <View>
      <Text>{time}</Text>
    </View>
  );
};

export default ExerciceTimer;

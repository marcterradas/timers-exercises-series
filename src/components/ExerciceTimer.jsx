import { React, useState } from "react";
import { TouchableOpacity, Text } from "react-native";

import buttonStyles from "../styles/button.styles";

import {
  secondsToMinutes,
  minutesToSeconds,
  substractOneSecond,
} from "../logic/timer.js";

const ExerciceTimer = ({ exercice = {} }) => {
  const { name, repetitions, breakTime } = exercice;
  const [time, setStime] = useState(secondsToMinutes(breakTime));

  function handleTimer() {
    console.log("handle timer ...");
  }

  return (
    <TouchableOpacity onPress={handleTimer} style={buttonStyles.bigButton}>
      <Text>{time}</Text>
    </TouchableOpacity>
  );
};

export default ExerciceTimer;

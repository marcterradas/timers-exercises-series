import { React, useState, useEffect } from "react";
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
  const [countDown, setCountDown] = useState(false);

  function clickTimer() {
    setCountDown(!countDown);
  }

  return (
    <TouchableOpacity onPress={clickTimer} style={buttonStyles.bigButton}>
      <Text>{time}</Text>
    </TouchableOpacity>
  );
};

export default ExerciceTimer;

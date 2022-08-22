import { React, useState, useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import buttonStyles from "../styles/button.styles";
import timerStyles from "../styles/timers.styles";

import {
  secondsToMinutes,
  minutesToSeconds,
  substractOneSecond,
} from "../logic/timer.js";

const ExerciceTimer = ({ exercice = {} }) => {
  const { name, repetitions, breakTime } = exercice;

  const [time, setTime] = useState(breakTime);
  const [countDown, setCountDown] = useState(false);
  const [repetiton, setRepetition] = useState(1);

  function clickTimer() {
    setCountDown(!countDown);
  }

  function updateTime() {
    const newTime = substractOneSecond(time);
    setTime(newTime);
  }

  function updateTimer() {
    const seconds = minutesToSeconds(time);

    if (countDown && seconds > 0) {
      const oneSecond = 1000;
      const interval = setInterval(updateTime, oneSecond);
      return () => clearInterval(interval);
    }
  }

  useEffect(updateTimer, [countDown, time]);
  useEffect(() => setTime(secondsToMinutes(breakTime)), [breakTime]);

  return (
    <TouchableOpacity onPress={clickTimer} style={buttonStyles.bigButton}>
      <View>
        <Text>{name}</Text>
        <Text>
          {repetiton}/{repetitions}
        </Text>
      </View>
      <Text style={timerStyles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

export default ExerciceTimer;

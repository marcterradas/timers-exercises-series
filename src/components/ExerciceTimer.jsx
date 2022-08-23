import { React, useState, useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import timerStyles from "../styles/timers.styles";

import {
  secondsToMinutes,
  minutesToSeconds,
  substractOneSecond,
} from "../logic/timer.js";

const ExerciceTimer = ({ exercice = {}, getNextExercice }) => {
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

    let newRepetition = repetiton;

    if (newTime === "00:00") {
      newRepetition++;
      setRepetition(newRepetition);
      setTime(secondsToMinutes(breakTime));
      setCountDown(false);
    }

    if (newRepetition > repetitions) {
      setRepetition(1);
      setCountDown(false);
      getNextExercice();
    }
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
    <TouchableOpacity
      onPress={clickTimer}
      style={timerStyles.exerciceContainer}
    >
      <View style={timerStyles.exerciceRowContainer}>
        <View style={timerStyles.exerciceNameContainer}>
          <Text>{name}</Text>
        </View>
        <View style={timerStyles.exerciceRepetitionsConatiner}>
          <Text>
            {repetiton}/{repetitions}
          </Text>
        </View>
      </View>
      <View style={timerStyles.exerciceTimerContainer}>
        <Text style={timerStyles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciceTimer;

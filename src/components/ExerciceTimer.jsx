import { React } from "react";
import { View, Text } from "react-native";

const ExerciceTimer = ({ exercice = {} }) => {
  const { name, repetitions, breakTime } = exercice;
  console.log({ name, repetitions, breakTime });
  return (
    <View>
      <Text>Exercice timer ...</Text>
    </View>
  );
};

export default ExerciceTimer;

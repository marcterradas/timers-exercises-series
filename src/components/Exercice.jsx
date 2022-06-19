import { React } from "react";
import { View, Text } from "react-native";

const Exercice = ({ name, repetitions, breakTime }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{repetitions}</Text>
      <Text>{breakTime}</Text>
    </View>
  );
};

export default Exercice;

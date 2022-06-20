import { React } from "react";
import { View, Text } from "react-native";

import styles from "../styles/workout.styles";

const Exercice = ({ name, repetitions, breakTime }) => {
  return (
    <View style={styles.exerciceButton}>
      <Text>{name}</Text>
      <Text>{repetitions}</Text>
      <Text>{breakTime}</Text>
    </View>
  );
};

export default Exercice;

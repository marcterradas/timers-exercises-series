import { React } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "../styles/button.styles";

const WorkoutElement = ({ index, title, callBack }) => {
  return (
    <TouchableOpacity onPress={callBack} style={styles.bigButton}>
      <Text style={styles.buttonTitleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default WorkoutElement;

import { React } from "react";
import { Text, TouchableOpacity } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

import styles from "../styles/workout.styles";

const AddWorkout = () => {
  const icon = {
    name: "add-circle-outline",
    size: 40,
    color: "black",
  };
  return (
    <TouchableOpacity style={styles.bigButton}>
      <IonIcon name={icon.name} size={icon.size} color={icon.color} />
      <Text style={styles.buttonText}>AddWorkout</Text>
    </TouchableOpacity>
  );
};

export default AddWorkout;

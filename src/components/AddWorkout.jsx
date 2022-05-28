import { React } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

import styles from "../styles/workout.styles";

const AddWorkout = (setNumberExercices) => {
  const icon = {
    name: "add-circle-outline",
    size: 40,
    color: "black",
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bigButton}>
        <IonIcon name={icon.name} size={icon.size} color={icon.color} />
        <Text style={styles.buttonText}>AddWorkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;

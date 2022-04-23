import React from "react";
import { View, Text } from "react-native";
import ActionButton from "react-native-action-button";

const WorkoutScreen = () => {

  const createWorkout = () => {
    console.log("create workout");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Workout Screen ...</Text>
      <ActionButton buttonColor="black" onPress={createWorkout} />
    </View>
  );
};

export default WorkoutScreen;

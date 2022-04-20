import React from "react";
import { View, Text } from "react-native";
import ActionButton from "react-native-action-button";

const WorkoutScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Workout Screen ...</Text>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => {
          console.log("hi");
        }}
      />
    </View>
  );
};

export default WorkoutScreen;

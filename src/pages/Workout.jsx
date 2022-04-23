import { React, useState } from "react";
import { View, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

const WorkoutScreen = () => {
  const addButton = (
    <ActionButton buttonColor="black" onPress={createWorkout}>
      <Icon name="add-outline"></Icon>
    </ActionButton>
  );

  const returnButton = (
    <ActionButton buttonColor="black" onPress={returnToHome}>
      <Icon name="close-outline"></Icon>
    </ActionButton>
  );

  const [button, setButton] = useState(addButton);

  function createWorkout() {
    console.log("Create Workout");
    setButton(returnButton);
  }

  function returnToHome() {
    console.log("Return to Home");
    setButton(addButton);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Workout Screen ...</Text>
      {button}
    </View>
  );
};

export default WorkoutScreen;

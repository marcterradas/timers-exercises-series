import { React, useState } from "react";
import { View, Text } from "react-native";
import ActionButton from "react-native-action-button";

const WorkoutScreen = () => {
  const actionButtonTemplate = (
    <ActionButton buttonColor="black" onPress={createWorkout} />
  );
  const [actionButton, setShowActionButton] = useState(actionButtonTemplate);

  function createWorkout() {
    // setShowActionButton(false);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Workout Screen ...</Text>
      {actionButton}
    </View>
  );
};

export default WorkoutScreen;

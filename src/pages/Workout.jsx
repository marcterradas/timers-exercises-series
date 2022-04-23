import { React, useState } from "react";
import { View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";

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
  const [page, setPage] = useState(WorkoutList);

  function createWorkout() {
    setButton(returnButton);
    setPage(WorkoutForm);
  }

  function returnToHome() {
    setButton(addButton);
    setPage(WorkoutList);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {page}
      {button}
    </View>
  );
};

export default WorkoutScreen;

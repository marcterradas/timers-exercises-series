import { React, useState } from "react";
import { View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";
import styles from "../styles/workout.styles";

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
  const [page, setPage] = useState("list");

  function createWorkout() {
    setButton(returnButton);
    setPage("form");
  }

  function returnToHome() {
    setButton(addButton);
    setPage("list");
  }

  return (
    <View style={styles.container}>
      {page == "list" ? <WorkoutList /> : <WorkoutForm />}
      {button}
    </View>
  );
};

export default WorkoutScreen;

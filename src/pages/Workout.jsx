import { React, useState } from "react";
import { View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import WorkoutList from "../components/WorkoutList";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();
  const [button, setButton] = useState(addButton);
  const [page, setPage] = useState(WorkoutList(t));

  function createWorkout() {
    setButton(returnButton);
    setPage(WorkoutForm(t));
  }

  function returnToHome() {
    setButton(addButton);
    setPage(WorkoutList(t));
  }

  return (
    <View style={styles.container}>
      {page}
      {button}
    </View>
  );
};

export default WorkoutScreen;

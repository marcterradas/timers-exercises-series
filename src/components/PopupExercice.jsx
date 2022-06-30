import { React } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../styles/workout.styles";

const PopupExercice = ({ name, repetitions, breakTime }) => {
  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View style={styles.container}>
          <Text>Popup exercice ...</Text>
        </View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <Text>Buttons ...</Text>
      </View>
    </>
  );
};

export default PopupExercice;

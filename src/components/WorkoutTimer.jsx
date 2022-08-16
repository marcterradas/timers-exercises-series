import { React } from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "../styles/timers.styles";

const WorkoutTimer = ({ workout }) => {
  const [name, exercices] = workout;
  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text styles={styles.title}>{name}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default WorkoutTimer;

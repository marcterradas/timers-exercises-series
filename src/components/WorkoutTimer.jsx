import { React } from "react";
import { View, Text } from "react-native";

const WorkoutTimer = ({ workout }) => {
  const [name, exercices] = workout;
  console.log(name);
  console.log(exercices);
  return (
    <View>
      <Text>todo workout timer element ...</Text>
    </View>
  );
};

export default WorkoutTimer;

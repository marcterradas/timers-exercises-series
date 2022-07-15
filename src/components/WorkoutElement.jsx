import { React } from "react";
import { View, Text } from "react-native";

const WorkoutElement = ({ id, title }) => {
  console.log(id, title);
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default WorkoutElement;

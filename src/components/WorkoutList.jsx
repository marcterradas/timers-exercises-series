import React from "react";
import { View, Text } from "react-native";

const WorkoutList = (t) => {
  const styles = {
    container: {
      padding: 10,
    },
  };

  return (
    <View style={styles.container}>
      <Text>{t("workout_list")}</Text>
    </View>
  );
};

export default WorkoutList;

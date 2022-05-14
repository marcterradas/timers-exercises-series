import React from "react";
import { View, Text } from "react-native";

const WorkoutForm = (t) => {
  const styles = {
    container: {
      padding: 10,
    },
  };

  return (
    <View style={styles.container}>
      <Text>{t("new_workout")}</Text>
    </View>
  );
};

export default WorkoutForm;

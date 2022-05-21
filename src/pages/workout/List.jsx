import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../../styles/workout.styles";

const WorkoutList = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text style={styles.title}>{t("workout_list")}</Text>
    </View>
  );
};

export default WorkoutList;

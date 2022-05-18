import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

const WorkoutList = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t("workout_list")}</Text>
    </View>
  );
};

export default WorkoutList;

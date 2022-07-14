import { React, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { getWorkouts } from "../logic/workout";

import ActionButton from "./ActionButton";

import styles from "../styles/workout.styles";

const WorkoutList = ({ changePage }) => {
  const { t } = useTranslation();

  useEffect(async () => {
    const workouts = await getWorkouts();
    console.log(workouts);
  }, []);

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{t("workout_list")}</Text>
        </View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton
          label={t("add")}
          type="actionButton"
          callBack={changePage}
        />
      </View>
    </>
  );
};

export default WorkoutList;

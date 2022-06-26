import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import ActionButton from "../../components/ActionButton";

import styles from "../../styles/workout.styles";

const WorkoutList = ({ callBack }) => {
  const { t } = useTranslation();

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
          callBack={callBack}
        />
      </View>
    </>
  );
};

export default WorkoutList;

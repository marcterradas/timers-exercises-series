import { React } from "react";
import { View, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import ActionButton from "./ActionButton";

import styles from "../styles/workout.styles";

const PopupExercice = ({ name, repetitions, breakTime }) => {
  const { t } = useTranslation();

  function edit() {
    console.log("edit ...");
  }

  function remove() {
    console.log("delete ...");
  }

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View style={styles.container}></View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton label={t("delete")} type="backButton" callBack={remove} />
        <ActionButton label={t("edit")} type="actionButton" callBack={edit} />
      </View>
    </>
  );
};

export default PopupExercice;

import { React } from "react";
import { View, ScrollView, Text } from "react-native";
import { useTranslation } from "react-i18next";

import Input from "./Input";
import ActionButton from "./ActionButton";
import Exercice from "./Exercice";
import AddExerciceButton from "./AddExerciceButton";

import styles from "../styles/workout.styles";

const ExerciceList = ({
  title,
  updateTitle,
  callBack,
  saveWorkout,
  exercices,
  openExercicePopup,
  fnShowForm,
}) => {
  const { t } = useTranslation();

  const ExercicesComponents = exercices.map(
    ({ name, repetitions, breakTime }, index) => {
      return (
        <Exercice
          key={index}
          index={index}
          name={name}
          repetitions={repetitions}
          breakTime={breakTime}
          callBack={openExercicePopup}
        />
      );
    }
  );

  const List = () => {
    return (
      <>
        <AddExerciceButton callBack={fnShowForm} />
        {ExercicesComponents}
      </>
    );
  };

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Text style={styles.title}>{t("new_workout")}</Text>
        </View>
        <Input label="workout_name" callBack={updateTitle} type="default" />
        <View style={styles.container}>
          <List />
        </View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton
          label={t("return")}
          type="backButton"
          callBack={callBack}
        />
        <ActionButton
          label={t("save")}
          type="actionButton"
          callBack={saveWorkout}
        />
      </View>
    </>
  );
};

export default ExerciceList;

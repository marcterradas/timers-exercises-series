import { React } from "react";
import { View, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import Input from "./Input";
import ActionButton from "./ActionButton";

import styles from "../styles/workout.styles";

const ExerciceForm = ({
  updateName,
  updateRepetitions,
  updateBreakTime,
  showButton,
  saveExercice,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Input label="exercice_name" callBack={updateName} type="default" />
          <Input
            label="number_repetitions"
            callBack={updateRepetitions}
            type="numeric"
          />
          <Input label="break_time" callBack={updateBreakTime} type="numeric" />
        </View>
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton
          label={t("cancel")}
          type="backButton"
          callBack={showButton}
        />
        <ActionButton
          label={t("save")}
          type="actionButton"
          callBack={saveExercice}
        />
      </View>
    </>
  );
};

export default ExerciceForm;

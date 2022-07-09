import { React } from "react";
import { View, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import Input from "./Input";
import ActionButton from "./ActionButton";

import styles from "../styles/workout.styles";

const ExerciceForm = ({
  name,
  repetitions,
  breakTime,
  setName,
  setRepetitions,
  setBreakTime,
  showButton,
  saveExercice,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollView style={styles.subContainer}>
        <View>
          <Input
            value={name}
            label="exercice_name"
            callBack={setName}
            type="default"
          />
          <Input
            value={repetitions}
            label="number_repetitions"
            callBack={setRepetitions}
            type="numeric"
          />
          <Input
            value={breakTime}
            label="break_time"
            callBack={setBreakTime}
            type="numeric"
          />
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

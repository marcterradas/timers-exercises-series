import { React, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../styles/workout.styles";
import { saveWorkout } from "../logic/workout";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");

  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <View>
        <Text>{t("workout_name")}</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        ></TextInput>
      </View>
      <View style={styles.actionContainer}>
        <Button
          onPress={saveWorkout(title)}
          style={styles.button}
          title={t("save")}
          accessibilityLabel={t("save")}
        ></Button>
      </View>
    </View>
  );
};

export default WorkoutForm;

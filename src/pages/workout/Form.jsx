import { React, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "../../styles/workout.styles";

const WorkoutForm = () => {
  const { t } = useTranslation();
  const [numerExercices, setNumberExercices] = useState(0);
  return (
    <View>
      <View>
        <Text style={styles.title}>{t("new_workout")}</Text>
      </View>
      <View>
        <Text>{numerExercices}</Text>
      </View>
    </View>
  );
};

export default WorkoutForm;

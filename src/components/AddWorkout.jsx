import { React, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { t } from "i18next";

import styles from "../styles/workout.styles";

const AddWorkout = () => {
  const [showForm, setShowForm] = useState(false);

  const icon = {
    name: "add-circle-outline",
    size: 40,
    color: "black",
  };

  function addExercice() {
    setShowForm(true);
  }

  const Button = () => {
    return (
      <TouchableOpacity onPress={addExercice} style={styles.bigButton}>
        <IonIcon name={icon.name} size={icon.size} color={icon.color} />
        <Text style={styles.buttonText}>{t("add")}</Text>
      </TouchableOpacity>
    );
  };

  const Form = () => {
    return (
      <View>
        <Text>{1111}</Text>
      </View>
    );
  };

  return showForm ? <Form /> : <Button />;
};

export default AddWorkout;

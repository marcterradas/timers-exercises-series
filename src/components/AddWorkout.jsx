import { React, useState } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
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
      <View style={styles.justifyContainer}>
        <View style={styles.containerJustifyLeft}>
          <Text style={styles.label}>{t("exercice_name")}</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.containerJustifyLeft}>
          <Text style={styles.label}>{t("number_repetitions")}</Text>
          <TextInput keyboardType="numeric" style={styles.input} />
        </View>
      </View>
    );
  };

  return showForm ? <Form /> : <Button />;
};

export default AddWorkout;

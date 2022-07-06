import React from "react";
import { Text, View, TextInput } from "react-native";
import { t } from "i18next";

import styles from "../styles/workout.styles";

const Input = ({ label, callBack, type, value = "" }) => {
  return (
    <View style={styles.containerJustifyLeft}>
      <Text style={styles.label}>{t(label)}</Text>
      <TextInput
        value={value}
        keyboardType={type}
        style={styles.input}
        onChangeText={(newValue) => callBack(newValue)}
      />
    </View>
  );
};

export default Input;

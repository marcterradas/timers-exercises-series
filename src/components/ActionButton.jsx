import { React } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/workout.styles";
import { t } from "i18next";

const ActionButton = ({ type, method, label }) => {
  const buttonContainer =
    type == "actionButton" ? "actionButtonContainer" : "backButtonContainer";
  return (
    <View style={styles[buttonContainer]}>
      <TouchableOpacity
        style={styles[type]}
        onPress={() => {
          method();
        }}
      >
        <Text style={styles.buttonText}>{t(label)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

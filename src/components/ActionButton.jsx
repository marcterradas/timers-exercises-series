import { React } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/workout.styles";
import { t } from "i18next";

const ActionButton = ({ type, callBack, label }) => {
  const buttonContainer =
    type == "actionButton" ? "actionButtonContainer" : "backButtonContainer";
  return (
    <View style={styles[buttonContainer]}>
      <TouchableOpacity
        style={styles[type]}
        onPress={() => {
          callBack();
        }}
      >
        <Text style={styles.buttonText}>{t(label)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

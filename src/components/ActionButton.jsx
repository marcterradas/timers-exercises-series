import { React } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/workout.styles";
import { t } from "i18next";

const ActionButton = (props) => {
  const buttonContainer =
    props.type == "actionButton"
      ? "actionButtonContainer"
      : "backButtonContainer";
  return (
    <View style={styles[buttonContainer]}>
      <TouchableOpacity
        style={styles[props.type]}
        onPress={() => {
          props.method();
        }}
      >
        <Text style={styles.buttonText}>{t(props.label)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

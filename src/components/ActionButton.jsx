import { React } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/workout.styles";
import { t } from "i18next";

const ActionButton = (props) => {
  return (
    <TouchableOpacity
      style={styles[props.type]}
      onPress={() => {
        props.method();
      }}
    >
      <Text style={styles.buttonText}>{t(props.label)}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

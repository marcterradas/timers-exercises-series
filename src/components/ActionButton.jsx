import { React } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/workout.styles";
import { t } from "i18next";

const ActionButton = (props) => {
  return (
    <View style={styles.actionContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.method();
        }}
      >
        <Text>{t(props.label)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

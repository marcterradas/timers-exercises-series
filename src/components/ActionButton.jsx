import { React } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/button.styles";
import { t } from "i18next";

const ActionButton = ({ type, callBack, label }) => {
  const containerTypes = {
    actionButton: "actionButtonContainer",
    backButton: "backButtonContainer",
    centerActionButton: "centerButtonContainer",
    centerBackButton: "centerButtonContainer",
    centerRemoveButton: "centerButtonContainer",
  };
  const buttonTypes = {
    actionButton: "actionButton",
    backButton: "backButton",
    centerActionButton: "actionButton",
    centerBackButton: "backButton",
    centerRemoveButton: "removeButton",
  };

  const buttonContainer = containerTypes[type];
  const buttonType = buttonTypes[type];

  return (
    <View style={styles[buttonContainer]}>
      <TouchableOpacity
        style={styles[buttonType]}
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

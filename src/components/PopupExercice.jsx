import { React } from "react";
import { View, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import ActionButton from "./ActionButton";

import styles from "../styles/workout.styles";

const PopupExercice = ({
  index,
  name,
  repetitions,
  breakTime,
  setShowPopup,
  removeExercice,
}) => {
  const { t } = useTranslation();

  function edit() {
    console.log("edit ...");
  }

  function remove() {
    removeExercice(index);
  }

  function close() {
    setShowPopup(false);
  }

  return (
    <>
      <View style={styles.container}>
        <ActionButton
          label={t("edit")}
          type="centerActionButton"
          callBack={edit}
        />
        <ActionButton
          label={t("delete")}
          type="centerRemoveButton"
          callBack={remove}
        />
        <ActionButton
          label={t("return")}
          type="centerBackButton"
          callBack={close}
        />
      </View>
    </>
  );
};

export default PopupExercice;

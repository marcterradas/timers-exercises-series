import { React, useState } from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import ExerciceForm from "./ExerciceForm";
import ActionButton from "./ActionButton";

import styles from "../styles/workout.styles";

const PopupExercice = ({
  name,
  repetitions,
  breakTime,
  setShowPopup,
  removeExercice,
  editExercice,
}) => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  // internal variables to not mutate params states
  const [_name, _setName] = useState(name);
  const [_repetitions, _setRepetitions] = useState(repetitions);
  const [_breakTime, _setBreakTime] = useState(breakTime);

  const edit = () => setShowForm(true);
  const close = () => setShowPopup(false);

  function saveExercice() {
    editExercice({ _name, _repetitions, _breakTime });
    close();
  }

  function remove() {
    removeExercice();
    close();
  }

  if (showForm) {
    return (
      <ExerciceForm
        name={_name}
        repetitions={_repetitions}
        breakTime={_breakTime}
        setName={_setName}
        setRepetitions={_setRepetitions}
        setBreakTime={_setBreakTime}
        showButton={close}
        saveExercice={saveExercice}
      />
    );
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

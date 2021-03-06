import { React, useState, useEffect } from "react";

import { cleanString, cleanNumber } from "../logic/helpers";
import { saveWorkout } from "../logic/workout";

import PopupExercice from "./PopupExercice";
import ExerciceForm from "./ExerciceForm";
import ExerciceList from "./ExerciceList";

const WorkoutForm = ({
  changePage,
  propId = false,
  propTitle = "",
  propExercices = [],
}) => {
  const [showForm, setShowForm] = useState(false);
  const [exercices, setExercices] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(-1);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [breakTime, setBreakTime] = useState("");

  const fnShowForm = () => setShowForm(true);
  const showButton = () => setShowForm(false);

  useEffect(() => {
    setTitle(propTitle);
    setExercices(propExercices);
  }, []);

  function resetVariables() {
    setName("");
    setRepetitions("");
    setBreakTime("");
  }

  function save() {
    saveWorkout({
      id: propId,
      title: cleanString(title),
      exercices,
    });
    changePage();
  }

  function saveExercice() {
    const exercicesCopy = JSON.parse(JSON.stringify(exercices));

    exercicesCopy.push({
      name: cleanString(name),
      repetitions: cleanNumber(repetitions),
      breakTime: cleanNumber(breakTime),
    });
    setExercices(exercicesCopy);
    resetVariables();
    showButton();
  }

  function editExercice({ _name, _repetitions, _breakTime }) {
    const exercicesCopy = JSON.parse(JSON.stringify(exercices));

    exercicesCopy[index] = {
      name: cleanString(_name),
      repetitions: cleanNumber(_repetitions),
      breakTime: cleanNumber(_breakTime),
    };
    setExercices(exercicesCopy);
    resetVariables();
    showButton();
  }

  function openExercicePopup(index) {
    setIndex(index);
    setShowPopup(true);
  }

  function removeExercice() {
    const exercicesCopy = JSON.parse(JSON.stringify(exercices));
    exercicesCopy.splice(index, 1);
    setExercices(exercicesCopy);
  }

  if (showPopup) {
    const { name, repetitions, breakTime } = exercices[index];
    return (
      <PopupExercice
        name={name}
        repetitions={repetitions}
        breakTime={breakTime}
        setShowPopup={setShowPopup}
        removeExercice={removeExercice}
        editExercice={editExercice}
      />
    );
  }

  if (showForm) {
    return (
      <ExerciceForm
        name={name}
        repetitions={repetitions}
        breakTime={breakTime}
        setName={setName}
        setRepetitions={setRepetitions}
        setBreakTime={setBreakTime}
        showButton={showButton}
        saveExercice={saveExercice}
      />
    );
  }

  return (
    <ExerciceList
      title={title}
      setTitle={setTitle}
      changePage={changePage}
      saveWorkout={save}
      exercices={exercices}
      openExercicePopup={openExercicePopup}
      fnShowForm={fnShowForm}
    />
  );
};

export default WorkoutForm;

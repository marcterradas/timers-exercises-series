import { React, useState } from "react";

import { cleanString, cleanNumber } from "../logic/helpers";

import PopupExercice from "./PopupExercice";
import ExerciceForm from "./ExerciceForm";
import ExerciceList from "./ExerciceList";

const WorkoutForm = ({ changePage }) => {
  const [showForm, setShowForm] = useState(false);
  const [exercices, setExercices] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(-1);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [repetitions, setRepetitions] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  const updateTitle = (value) => setTitle(cleanString(value));
  const updateName = (value) => setName(cleanString(value));
  const updateRepetitions = (value) => setRepetitions(cleanNumber(value));
  const updateBreakTime = (value) => setBreakTime(cleanNumber(value));
  const fnShowForm = () => setShowForm(true);
  const showButton = () => setShowForm(false);

  function saveWorkout() {
    console.log("save workout ...");
  }

  function saveExercice() {
    exercices.push({ name, repetitions, breakTime });
    showButton();
  }

  function openExercicePopup(index) {
    setIndex(index);
    setShowPopup(true);
  }

  function removeExercice(index) {
    const exercicesCopy = JSON.parse(JSON.stringify(exercices));
    exercicesCopy.splice(index, 1);
    setExercices(exercicesCopy);
    setShowPopup(false);
  }

  if (showPopup) {
    const { name, repetitions, breakTime } = exercices[index];
    return (
      <PopupExercice
        index={index}
        name={name}
        repetitions={repetitions}
        breakTime={breakTime}
        setShowPopup={setShowPopup}
        removeExercice={removeExercice}
      />
    );
  }

  if (showForm) {
    return (
      <ExerciceForm
        name={name}
        repetitions={repetitions}
        breakTime={breakTime}
        updateName={updateName}
        updateRepetitions={updateRepetitions}
        updateBreakTime={updateBreakTime}
        showButton={showButton}
        saveExercice={saveExercice}
      />
    );
  }

  return (
    <ExerciceList
      title={title}
      updateTitle={updateTitle}
      changePage={changePage}
      saveWorkout={saveWorkout}
      exercices={exercices}
      openExercicePopup={openExercicePopup}
      fnShowForm={fnShowForm}
    />
  );
};

export default WorkoutForm;

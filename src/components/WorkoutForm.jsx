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
  const [repetitions, setRepetitions] = useState("");
  const [breakTime, setBreakTime] = useState("");

  const fnShowForm = () => setShowForm(true);
  const showButton = () => setShowForm(false);

  function saveWorkout() {
    const data = {
      title: cleanString(title),
    };
    console.log(data);
  }

  function saveExercice() {
    const data = {
      name: cleanString(name),
      repetitions: cleanNumber(repetitions),
      breakTime: cleanNumber(breakTime),
    };
    exercices.push(data);
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
      saveWorkout={saveWorkout}
      exercices={exercices}
      openExercicePopup={openExercicePopup}
      fnShowForm={fnShowForm}
    />
  );
};

export default WorkoutForm;

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getWorkouts() {
  let keys,
    workouts = [];

  try {
    keys = await AsyncStorage.getAllKeys();
    workouts = await AsyncStorage.multiGet(keys);
  } catch (error) {
    console.error(error);
    return false;
  }

  return workouts;
}

export async function getWrokout(id) {
  let result = false;
  try {
    result = await AsyncStorage.getItem(id);
  } catch (error) {
    console.error(error);
  }
  return result;
}

export async function saveWorkout({ id, title, exercices }) {
  let result = false;
  try {
    result = id ? id : Date.now().toString();
    await AsyncStorage.setItem(id, JSON.stringify({ title, exercices }));
  } catch (error) {
    console.error(error);
  }
  return result;
}

export async function clear() {
  let result = true;
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(error);
    result = false;
  }
  return result;
}

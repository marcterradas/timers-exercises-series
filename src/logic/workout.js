import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Get workouts from device storage
 * @returns array with workouts or false if error occurs
 */
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

/**
 * Save workout to device storage
 * @param {Object} param0 with parameters id: string (optional for edit), title: string and exercices: array<Exercices>
 * @returns generated id or false if error
 */
export async function saveWorkout({ id, title, exercices }) {
  let result = false;
  try {
    if (exercices.length > 0) {
      id = id ? id : Date.now().toString();
      result = id;
      await AsyncStorage.setItem(id, JSON.stringify({ title, exercices }));
    }
  } catch (error) {
    console.error(error);
  }
  return result;
}

/**
 * Remove item from device storage
 * @param {String} id
 * @returns true if all okey or false if error
 */
export async function remove(id) {
  let result = false;
  try {
    await AsyncStorage.removeItem(id);
    result = true;
  } catch (error) {
    console.error(error);
  }

  return result;
}

/**
 * clear device storage
 * @returns true if all okey or false if error
 */
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

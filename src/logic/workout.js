import AsyncStorage from "@react-native-async-storage/async-storage";

export function getWorkouts() {
  return true;
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

export async function saveWorkout(workout) {
  let result = false;
  try {
    const id = Date.now().toString();
    await AsyncStorage.setItem(id, JSON.stringify(workout));
    result = id;
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

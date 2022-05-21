import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
    alignSelf: "stretch",
    padding: 10,
  },
  button: {
    borderColor: "#ccc",
    alignSelf: "stretch",
  },
  actionContainer: {
    alignSelf: "stretch",
  },
});

export default styles;

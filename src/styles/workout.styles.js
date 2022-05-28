import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingTop: 20,
  },
  subContainer: {
    alignSelf: "stretch",
    paddingRight: 20,
    paddingLeft: 20,
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
  actionContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
  },
  button: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bigButton: {
    height: 80,
    padding: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default styles;

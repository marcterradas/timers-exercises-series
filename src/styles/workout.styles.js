import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

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
  containerJustifyLeft: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    paddingTop: 10,
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
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.WHITE,
    alignSelf: "stretch",
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
    backgroundColor: COLORS.WHITE,
    alignSelf: "flex-end",
    alignItems: "center",
    width: "50%",
  },
  bigButton: {
    height: 80,
    padding: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    backgroundColor: COLORS.WHITE,
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default styles;

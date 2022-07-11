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
  justifyContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    backgroundColor: COLORS.WHITE,
    alignSelf: "stretch",
  },
  form: {
    flex: 1,
    alignSelf: "stretch",
    padding: 10,
  },
  actionContainer: {
    padding: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  bigButton: {
    height: 80,
    padding: 10,
    borderRadius: 4,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.BLUE,
    alignSelf: "stretch",
    alignItems: "center",
  },
  exerciceButton: {
    height: 80,
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.GRAY,
    alignSelf: "stretch",
  },
  exerciceTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;

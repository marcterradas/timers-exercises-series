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
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  actionContainer: {
    padding: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  exerciceContainer: {
    height: 80,
    padding: 10,
    borderRadius: 4,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.BLUE,
    alignSelf: "stretch",
  },
  exerciceRowContainer: {
    flexDirection: "row",
  },
  exerciceNameContainer: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    width: "50%",
  },
  exerciceRepetitionsConatiner: {
    alignSelf: "stretch",
    alignItems: "flex-end",
    width: "50%",
  },
  exerciceTimerContainer: {
    paddingTop: 6,
    alignSelf: "stretch",
    alignItems: "center",
    width: "100%",
  },
  time: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;

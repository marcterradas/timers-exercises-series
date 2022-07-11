import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
  },
  actionButton: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.YELLOW,
    alignSelf: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  backButton: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.WHITE,
    alignSelf: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  removeButton: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.RED,
    alignSelf: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  actionButtonContainer: {
    paddingLeft: 5,
    height: 40,
    alignSelf: "stretch",
    alignItems: "center",
    width: "50%",
  },
  backButtonContainer: {
    paddingRight: 5,
    height: 40,
    alignSelf: "stretch",
    alignItems: "center",
    width: "50%",
  },
  centerButtonContainer: {
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    width: "50%",
    marginBottom: 10,
  },
  centerBigButtonContainer: {
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
});

export default styles;

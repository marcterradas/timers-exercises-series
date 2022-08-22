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
  actionContainer: {
    padding: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  time: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;

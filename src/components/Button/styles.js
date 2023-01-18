import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58cc02",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,

    // borders
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57a600",
  },
  disabledContainer: {
    backgroundColor: "lightgray",
    borderColor: "gray",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default styles;

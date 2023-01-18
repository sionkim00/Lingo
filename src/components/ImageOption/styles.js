import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    // border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgray",
    borderRadius: 10,

    // size
    width: "48%",
    height: "48%",

    // spacing
    padding: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  optionImage: {
    // backgroundColor: "red",
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  selectedContainer: {
    backgroundColor: "#ddf4fe",
    borderColor: "#81d5fe",
  },
  selectedText: {
    color: "#40bef7",
  },
});

export default styles;

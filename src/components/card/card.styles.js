import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
  optionContainer: {
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 10,
    borderBottomWidth: 4,
    marginTop: 8,
    alignItems: "center",
    padding: 10,
    width: "48%",
    height: "45%",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  title: {
    fontSize: 20,
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  optionsContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
  },

  optionText: {},
});

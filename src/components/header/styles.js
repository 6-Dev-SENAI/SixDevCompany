import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#4C96A5",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    alignItems: "center",
  },
  img: {
    height: 14,
    width: 57,
  },
});

export default Styles;

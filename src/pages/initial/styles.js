import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  reload: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  reload_btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 28,
  },
  reload_text: {
    color: "#474747",
    fontSize: 16,
  },
});

export default Styles;

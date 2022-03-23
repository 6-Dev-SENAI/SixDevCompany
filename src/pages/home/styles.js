import { StyleSheet, Dimensions } from "react-native";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const Style = StyleSheet.create({
  bgcolor: {
    backgroundColor: "#4C96A5",
    width: winWidth,
    height: winHeight,
    padding: 5
  },
  border: {
    borderColor: "#474747",
    borderStyle: "solid",
    borderWidth: 0.3,
    width: winWidth - 10,
    height: winHeight - 10,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center"
  },
  borderToBorder: {
    borderColor: "#474747",
    borderStyle: "solid",
    borderWidth: 0.3,
    width: winWidth - 20,
    height: winHeight - 20,
    justifyContent: "space-around"
  },
  logo: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginHorizontal: 35
  },
  inputs: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 40,
    marginHorizontal: 45,
  },
  img: {
    width: 135,
    height: 64
  },
  input: {
    height: 30,
    minWidth: 250,
    margin: 12,
    color: "#474747",
    borderColor: "#474747",
    fontSize: 16,
    borderBottomWidth: 0.3,
    paddingTop: 10,
  },
  buttons: {
    paddingTop: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    //alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 28,
    borderColor: "#474747",
    borderWidth: 0.3,
  },
  button_text: {
    color: "#474747",
    fontSize: 16
  },
  forgot: {
    fontSize: 14,
    color: "#474747",
    textDecorationLine: "underline",
    paddingTop: 7
  }
});

export default Style;

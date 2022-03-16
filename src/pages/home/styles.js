import { StyleSheet, Dimensions } from "react-native";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Style = StyleSheet.create({
  bgcolor: {
    backgroundColor: "#4C96A5",
    width: winWidth,
    height: winHeight,
    padding: 5,
  },
  border: {
    borderColor: "#474747",
    borderStyle: "solid",
    borderWidth: 2,

    width: winWidth - 10,
    height: winHeight - 10,
  },
  borderToBorder: {
    borderColor: "#474747",
    borderStyle: "solid",
    borderWidth: 2,

    width: winWidth - 20,
    height: winHeight - 20,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 135,
    height: 64
  }
});

export default Style;

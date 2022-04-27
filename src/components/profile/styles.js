import { StyleSheet, Dimensions } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Styles = StyleSheet.create({
  // PROFILE STYLES
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    paddingTop: 30,
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 5,
  },
  job: {
    fontSize: 13,
    paddingTop: 3,
  },

  // POPUP STYLES
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 5,
    color:"white",
    backgroundColor:"#4C96A5"
  },
 
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textClose: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Styles;

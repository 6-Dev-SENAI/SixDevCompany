import { StyleSheet, Dimensions } from "react-native";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const Styles = StyleSheet.create({
    bgcolor: {
        flex: 1,
        backgroundColor: "#4C96A5",
    },
    container: {
        width: winWidth,
        height: winHeight,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        marginHorizontal: 35
    },
    img: {
        width: 135,
        height: 64
    },
    inputs: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 40,
        marginHorizontal: 45
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
        paddingTop: 25,
        width: winWidth,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    button: {
        width: 150,
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
        paddingTop: 10
    }
});

export default Styles;
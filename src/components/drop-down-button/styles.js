import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
    menuProvider: {
        flexDirection: "column",
        padding: 10,
        marginTop: 15,
        alignSelf: "flex-end"
    },
    headerText: {
        fontSize: 15,
        margin: 10,
        fontWeight: "bold"
    },
    menuContent: {
        color: "#474747",
        fontWeight: "700",
        padding: 1,
        fontSize: 14
    },
    img: {
        width: 20,
        height: 20
    }
});

export default Styles;
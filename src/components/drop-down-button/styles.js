import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    menuProvider: {
        flexDirection: "column",
        marginTop: 14,
        alignSelf: "flex-end",
        position: "absolute",
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
    menuOptions: {
        height: "100%"
    },
    img: {
        width: 20,
        height: 20
    }
});

export default Styles;
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 5
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonEdit: {
        backgroundColor: "yellow",
    },
    buttonDelete: {
        backgroundColor: "red",
    },
    buttonClose: {
        // backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textClose: {
        color: "black",
        fontWeight: "normal",
        textAlign: "center",
        textDecorationLine: 'underline',
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold"
    }
});


export default Styles;
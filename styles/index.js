import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    contener: {
        flex: 1,
        alignItems: "center"
    },
    safe: {
        marginTop: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 50,
        borderColor: "#000",
        borderWidth: 1,
        width: 300
    },
    labelInput: {
        fontSize: 20,
        fontWeight: "bold"
    },
    contConnect: {
        height: 300
    },
    btn: {
        height: 20,
        width: 300,
        backgroundColor: "#007bff",
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },
    tache: {
        width: 300,
        backgroundColor: "#007bff",
        margin: 10,
        paddingVertical: 5
    },
    tacheTxt: {
        textAlign: "center"
    }
})
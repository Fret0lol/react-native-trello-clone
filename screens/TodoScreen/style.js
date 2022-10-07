import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 60,
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    logo: {
        flex: 1,
        height: 120,
        width: 140,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    categorie: {
        borderRadius: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 90,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#788eec',
        alignItems: "center",
        justifyContent: 'center',
        width: '90%',
    }
})
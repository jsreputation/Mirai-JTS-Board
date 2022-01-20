import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    Image: {
        alignItems: 'center',
        marginBottom: height / 15
    },
    logo: {
        height: 130,
        width: 500,
        marginTop: height / 15
    },
    InputGroup: {
        width: width / 6 * 5,
    },
    buttonGroup: {
        width: width / 6 * 5,
        marginBottom: height / 15
    },
    input: {
        height: height / 14,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        backgroundColor: '#fafafa',
        marginBottom: 10,
        fontSize: 30
    },
    fontColor: {
        color: '#b39438',
        textAlign: 'right',
        fontSize: 30 
    },
    button: {
        backgroundColor: 'rgba(211, 179, 73, 1), rgba(169, 138, 53, 1), rgba(211, 179, 73, 1)',
        height: height / 14,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: "bold"
    },
})
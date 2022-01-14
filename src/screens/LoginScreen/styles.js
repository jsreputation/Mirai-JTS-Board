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
        marginBottom: height / 10
    },
    logo: {
        height: 130,
        width: 500,
        marginTop: height / 10
    },
    InputGroup: {
        width: width / 6 * 5,
    },
    buttonGroup: {
        width: width / 6 * 5,
        marginBottom: height / 15
    },
    input: {
        height: 80,
        borderRadius: 5,
        padding: 10,
        overflow: 'hidden',
        backgroundColor: '#fafafa',
        marginBottom: height/ 35,
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
    modal: {
        backgroundColor: 'white',
    },
    modalheader: {
        backgroundColor: 'rgba(211, 179, 73, 1), rgba(169, 138, 53, 1), rgba(211, 179, 73, 1)',
        fontSize: 30,
        height: 80,
        padding: 20,
    },
    modaltitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center'
    },
    modalinput: {
        backgroundColor: '#fafafa',
        margin: 30,
        height: 80,
        fontSize: 30,
        padding: 10
    },
    buttonStyle: {
        width: 300,
        height: 100,
        margin: 20,
        
    },
    buttonGroup1: {
        flexDirection : 'row',
    },
    modalbutton: {
        backgroundColor: 'rgba(211, 179, 73, 1), rgba(169, 138, 53, 1), rgba(211, 179, 73, 1)',
        padding: 20,
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center'
    },
    button2: {
        color: 'rgba(211, 179, 73, 1)'
    }
})
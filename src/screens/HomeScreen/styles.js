import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    container1: {
        marginBottom: height / 10
    },
    image1: {
        height: 130,
        width: 500,
        marginTop: height / 10,
        marginBottom: height / 10
    },
    container2: {
        marginBottom: height / 15
    },
    textfont: { 
        color: '#c4c5c8',
        fontSize: 30
    },
    textfont1: {
        color: '#c4c5c8',
        fontSize: 25
    },
    btnDetails: {
        alignItems: 'center',
        borderColor: '#b39438',
        padding: 15,
        borderRightWidth: 2,
        borderBottomColor: '#b39438'
    },
    btnDetails1: {
        alignItems: 'center',
        borderColor: '#b39438',
        padding: 15,
        borderTopWidth: 2,
        borderRightWidth: 2
    
    },
    btnDetails2: {
        alignItems: 'center',
        padding: 15
    },
    fontColor: {
        color: '#b39438',
    }
});

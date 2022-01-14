import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert, Pressable, ScrollView } from "react-native";
import Modal from "react-native-modal";
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }
    const onLoginPress = () => {
         firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('MainStackNavigator', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.Image}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/JTSBoardLogo.png')}
                    />
                </View>
                <View style={styles.InputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder='メール'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                   
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='パスワード'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <Text style={styles.fontColor} onPress={toggleModal}>パスワードをお忘れですか？</Text>
                </View>
            </ScrollView>

            <View style = {styles.buttonGroup}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>ログイン</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onFooterLinkPress}>
                    <Text style={styles.buttonTitle}>新規登録</Text>
                </TouchableOpacity>
            </View>



            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <View style = {styles.modalheader}>
                        <Text style = {styles.modaltitle}>パスワードをお忘れですか？</Text>
                    </View>
                    <TextInput
                        style={styles.modalinput}
                        placeholder='Eメール'
                        placeholderTextColor="#aaaaaa"
                        value={password}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <View style={ styles.buttonGroup1 }>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                style={styles.modalbutton}
                                >
                                <Text style={styles.buttonTitle}>キャンセル</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                style={styles.modalbutton}
                                onPress={toggleModal}>
                                <Text style={styles.buttonTitle}>送信</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
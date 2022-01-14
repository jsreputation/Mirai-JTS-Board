import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from '../../firebase/config'

export default function RegistrationScreen({navigation}) {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }
    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Login', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.Image}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/JTSBoardLogo.png')}
                    />
                </View>
                <View style={styles.InputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder='サロン名'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
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
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='パスワードを認証する'
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
            </ScrollView>
            <View style = {styles.buttonGroup}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>新規登録</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onFooterLinkPress}>
                    <Text style={styles.buttonTitle}>ログイン</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
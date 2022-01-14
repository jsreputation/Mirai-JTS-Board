import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import Row  from './row';
import  Col  from './column'; 

export default function HomeScreen({navigation}) {
  return (

    <SafeAreaView style={styles.container}> 

        <View style = {styles.container1}>
          <Image source={require('../../../assets/images/JTSBoardLogo.png')} style={styles.image1}></Image>
        </View>
        <View style = {styles.container2}>
          <Text style = {styles.textfont}>What are you looking for?</Text>
        </View>
        <Row >
            <Col customStyles={{"flex":1}}>
              <TouchableOpacity style={styles.btnDetails}  onPress={() => navigation.navigate("Customer")}>
              <Image source={require('../../../assets/images/customerlist_.png')} style={styles.image}></Image>
                <Text style = {styles.textfont1}>CustomerList</Text>
              </TouchableOpacity>
            </Col>
            <Col customStyles={{"flex":1}}>
              <TouchableOpacity style={styles.btnDetails}  onPress={() => navigation.navigate("Calender")}>
              <Image source={require('../../../assets/images/calendar_.png')} style={styles.image}></Image>
                <Text style = {styles.textfont1}>Calender</Text>
              </TouchableOpacity>
            </Col>
            <Col customStyles={{"flex":1}}>
              <TouchableOpacity style={styles.btnDetails2}  onPress={() => navigation.navigate("Sales")}>
              <Image source={require('../../../assets/images/expenses_.png')} style={styles.image}></Image>
                <Text style = {styles.textfont1}>Sales</Text>
              </TouchableOpacity>
            </Col>
        </Row>
        <Row >
            <Col customStyles={{"flex":1}}>
              <TouchableOpacity style={styles.btnDetails1}  onPress={() => navigation.navigate("Expenses")}>
              <Image source={require('../../../assets/images/sales_.png')} style={styles.image}></Image>
                <Text style = {styles.textfont1}>Expenses</Text>
              </TouchableOpacity>
            </Col>
            <Col customStyles={{"flex":1}}>
              <TouchableOpacity style={styles.btnDetails1}  onPress={() => navigation.navigate("Customer")}>
              <Image source={require('../../../assets/images/customerlist_.png')} style={styles.image}></Image>
                <Text style = {styles.textfont1}>CustomerList</Text>
              </TouchableOpacity>
            </Col>
            <Col customStyles={{"flex":1}}>
            <TouchableOpacity style={styles.btnDetails1}  onPress={() => navigation.navigate("Expenses")}>
            <Image source={require('../../../assets/images/expenses_.png')} style={styles.image}></Image>
                <Text style = {styles.textfont1}>Expenses</Text>
              </TouchableOpacity>
            </Col>
        </Row>  
    </SafeAreaView>
  );
};


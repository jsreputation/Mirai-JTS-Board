import React from 'react'
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Row  from './row';
import  Col  from './column'; 

export default function HomeScreen({navigation}) {

  const window = useWindowDimensions();
  return (

    <SafeAreaView style={styles.container}> 

        <View style = {{height: window.height / 3}}>
          <Image source={require('../../../assets/images/JTSBoardLogoBig.png')} style={styles.image1}></Image>
        </View>
        <View style = {{height: window.height / 6, alignItems: 'center'}}>
          <Text style = {styles.textfont}>What are you looking for?</Text>
        </View>
        <Row style = {{height: window.height / 4}}>
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
        <Row style = {{height: window.height / 4}}>
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


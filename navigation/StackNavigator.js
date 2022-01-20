import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, useWindowDimensions } from "react-native";
import  HomeScreen  from "../src/screens/HomeScreen/HomeScreen";
import  CustomerlistScreen  from "../src/screens/CustomerlistScreen/CustomerlistScreen";
import  CalenderScreen  from "../src/screens/CalenderScreen/CalenderScreen";
import  SalesScreen  from "../src/screens/SalesScreen/SalesScreen";
import  ExpensesScreen  from "../src/screens/ExpensesScreen/ExpensesScreen";
import LogoutScreen from '../src/screens/LogoutScreen/LogoutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Customer" component={CustomerlistScreen} />
      <Stack.Screen name="Calender" component={CalenderScreen} />
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="Expenses" component={ExpensesScreen} />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {

  const window = useWindowDimensions();

  return (
    <Drawer.Navigator 
      screenOptions={{
          drawerType:  'permant',
          drawerStyle: {
            backgroundColor: 'white',
            width: 500,
          },
          drawerLabelStyle: {
            fontSize: 30,
            color: '#d0d7de',
          },
          drawerItemStyle: {
            borderBottomWidth: 2,
            padding: 10,
            borderColor: '#b1974af2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'rgba(211, 179, 73, 1), rgba(169, 138, 53, 1), rgba(211, 179, 73, 1)',
          },
      }}
      initialRouteName="Home">
      <Drawer.Screen options={{
        drawerIcon: ({ focused, size }) => (
          <Image source={require('../assets/images/JTSBoardLogo.png')} style={{ height: 100, width: 450, marginTop: 20, marginBottom: 20 }}  resizeMode="contain"/>
        ),
      }} name=" " component={SalesScreen} />
      <Drawer.Screen options={{
        drawerIcon: ({ focused, size }) => (
          <Image source={require('../assets/images/MyshopDefaultIcon.png')} style={{ height: 50, width: 30 }}  resizeMode="contain"/>
        ),
      }} name="Home" component={MainStackNavigator} />
      <Drawer.Screen  options={{
        drawerIcon: ({ focused, size }) => (
          <Image source={require('../assets/images/DashboardDefaultIcon.png')} style={{ height: 50, width: 30 }}  resizeMode="contain"/>
        ),
      }} name="Customer" component={CustomerlistScreen} />
      <Drawer.Screen options={{
        drawerIcon: ({ focused, size }) => (
          <Image source={require('../assets/images/DetailIcon.png')} style={{ height: 50, width: 30 }}  resizeMode="contain"/>
        ),
      }} name="Calender" component={CalenderScreen} />
      <Drawer.Screen options={{
        drawerIcon: ({ focused, size }) => (
          <Image source={require('../assets/images/BudgetIcon.png')} style={{ height: 50, width: 30, marginTop: 10, marginLeft: 10 }}  resizeMode="contain"/>
        ),
        drawerItemStyle: {
          backgroundColor: 'rgba(211, 179, 73, 1), rgba(169, 138, 53, 1), rgba(211, 179, 73, 1)',
          height: 80,
          marginTop: window.height - 600,
          width: 480
        },
        drawerLabelStyle: {
          color: 'white',
          fontSize: 30,
        },
      }} name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export { DrawerNavigator };
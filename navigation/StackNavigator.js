import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
  return (
    <Drawer.Navigator 
    drawerPosition={'left'}
    drawerType={'slide'}
    edgeWidth={10}
    screenOptions={{
    drawerStyle: {
      backgroundColor: 'white',
      width: 240,
    },
    headerTitleStyle: {
      // fontWeight: 'bold',
      // fontSize: 30,


    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'rgba(211, 179, 73, 1), rgba(169, 138, 53, 1), rgba(211, 179, 73, 1)',
    },
  }}
    initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export { DrawerNavigator };
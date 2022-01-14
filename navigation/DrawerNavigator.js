import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import  HomeScreen  from "../src/screens/HomeScreen/HomeScreen";
import  CustomerlistScreen  from "../src/screens/CustomerlistScreen/CustomerlistScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#111',
        width: 240,
      },
    }}
    initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Customer" component={CustomerlistScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
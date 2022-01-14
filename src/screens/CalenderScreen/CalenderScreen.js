import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CalenderScreen = ({navigation}) => {
  return (

    <View style={styles.center}>
        <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
        />
      <Text>This is the CalenderScreen screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default CalenderScreen;
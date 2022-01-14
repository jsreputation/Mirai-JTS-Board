import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SalesScreen = ({navigation}) => {
  return (

    <View style={styles.center}>
        <Button
          title="Go to About Home"
          onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
        />
      <Text>This is the SalesScreen Page</Text>
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

export default SalesScreen;
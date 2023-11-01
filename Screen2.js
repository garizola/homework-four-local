import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 2</Text>
      <Button
        title="Go back to Screen 1"
        onPress={() => navigation.goBack()}
        color="#27AE60" // Set the button color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D5DBDB", // Light gray background color
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: "#34495E", // Dark blue text color
  },
});

export default Screen2;

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate("Screen2")}
        color="#007AFF" // Set the button color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9EBEA", // Light red background color
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: "#C0392B", // Dark red text color
  },
});

export default Screen1;

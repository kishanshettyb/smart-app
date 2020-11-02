import React from "react";
import { AuthContext } from "./Context";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Search({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

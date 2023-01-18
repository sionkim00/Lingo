import { View, Text, Image } from "react-native";
import React from "react";
import ImageOption from "./src/components/ImageOption";

import icon from "./assets/icon.png";
import styles from "./App.styles";

const App = () => {
  const status = "error";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption />
      </View>
    </View>
  );
};

export default App;

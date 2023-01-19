import { View, Text } from "react-native";
import React from "react";
import ProgressBar from "../ProgressBar";
import styles from "./styles";

const Header = ({ progress }) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  );
};

export default Header;

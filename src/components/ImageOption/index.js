import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.optionContainer, isSelected && styles.selectedContainer]}
    >
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={[styles.optionText, isSelected && styles.selectedText]}>
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.prototypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;

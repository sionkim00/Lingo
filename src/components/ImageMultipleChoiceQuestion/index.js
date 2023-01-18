import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import ImageOption from "../ImageOption";
import Button from "../Button";
import PropTypes from "prop-types";

import styles from "./styles";

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      onCorrect();

      // clear select
      setSelected(null);
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={false} />
    </>
  );
};

export default ImageMultipleChoiceQuestion;

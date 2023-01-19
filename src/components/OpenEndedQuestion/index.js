import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";

import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        {/* Image */}
        <Image source={mascot} resizeMode="contain" style={styles.mascot} />

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      {/* Sentence container */}
      <TextInput
        placeholder="Type the answer here!"
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        textAlignVertical="top"
        multiline
      />
      <Button text="Check" onPress={onButtonPress} disabled={false} />
    </>
  );
};

export default OpenEndedQuestion;

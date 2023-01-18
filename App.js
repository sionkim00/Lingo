import { View, Text, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";

import icon from "./assets/icon.png";
import styles from "./App.styles";
import questions from "./assets/data/imageMulatipleChoiceQuestions";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";

const App = () => {
  const [curQuestionIdx, setcurQuestionIdx] = useState(0);

  useEffect(() => {
    if (curQuestionIdx >= questions.length - 1) {
      setcurQuestionIdx(0);
    }
  }, [curQuestionIdx]);

  const onCorrect = () => {
    setcurQuestionIdx((prev) => prev + 1);
  };

  const onWrong = () => {
    Alert.alert("Wrong answer");
  };

  return (
    <View style={styles.container}>
      <ImageMultipleChoiceQuestion
        question={questions[curQuestionIdx]}
        onCorrect={onCorrect}
        onWrong={onCorrect}
      />
    </View>
  );
};

export default App;

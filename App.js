import { View, Text, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";

import styles from "./App.styles";
import questions from "./assets/data/allQuestions";

const App = () => {
  const [curQuestionIdx, setcurQuestionIdx] = useState(1);

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
      {questions[curQuestionIdx].type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={questions[curQuestionIdx]}
          onCorrect={onCorrect}
          onWrong={onCorrect}
        />
      )}
      {questions[curQuestionIdx].type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={questions[curQuestionIdx]}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  );
};

export default App;

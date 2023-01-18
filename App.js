import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import ImageOption from "./src/components/ImageOption";

import icon from "./assets/icon.png";
import styles from "./App.styles";
import question from "./assets/data/oneQuestionWithOption";

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default App;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styling";

const Botton = (props) => {
  const name = props.title;
  const bgcolor = props.bg;
  const txtclr = props.textclr;

  return (
    <View
      style={[
        styles.bview,
        { backgroundColor: bgcolor == "#5956e9" ? "white" : "#5956e9" },
      ]}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: txtclr == "white" ? "#5956e9" : "white",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default Botton;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styling";

const Botton = (props) => {
  const navigation = useNavigation();
  const name = props.title;
  const bgcolor = props.bg;
  const txtclr = props.textclr;

  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.navi)}>
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
    </TouchableOpacity>
  );
};

export default Botton;

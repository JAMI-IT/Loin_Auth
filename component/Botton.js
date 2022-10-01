import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styling";

const Botton = (props) => {
  const navigation = useNavigation();
  const name = props.title;
  const bgcolor = "";

  const colors = () => {
    if (props.bg == "#5956e9") {
      bgcolor = "white";
    } else {
      bgcolor = "#5956e9";
    }
    console.log("bgcolor");
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.navi)}>
      <View style={[styles.bview, { bottom: 30 }]}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            backgroundColor: bgcolor,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Botton;

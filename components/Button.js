import React from "react";
import { Text } from "react-native";

const Button = (props) => {
  const title = props.title;
  return <Text style={{ fontSize: 20 }}>{title}</Text>;
};

export default Button;

import { View, Text, TextInput } from "react-native";
import styles from "./styling";

import React from "react";

const Input = (props) => {
  const icon = props.icons;
  const txtshow = props.tshow;
  const security = props.sect;
  const ktype = props.keybtype;
  const plholder = props.placehol;
  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType={ktype}
        secureTextEntry={security == "true" ? true : false}
        placeholder={plholder}
      />
    </View>
  );
};

export default Input;

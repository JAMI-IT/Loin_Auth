import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styling";
import { useCallback } from "react";

import React from "react";

const Input = (props) => {
  const rightIcon = props.rclick;
  const setRightIcon = props.setrclick;
  const showpasswor = props.paswrd;
  var setpshword = props.setpaswrd;
  var eyes = props.eye;
  var icons = props.icon;
  const icontxt = props.iTxt;
  const values = props.valu;
  const setvalues = props.setvalu;
  const ktype = props.keybtype;
  const plholder = props.placehol;
  console.log(rightIcon);

  const handlePasswordVisibility = useCallback(() => {
    if (rightIcon === "eye") {
      setRightIcon("eye-slash");
      setpshword(!showpasswor);
    } else if (rightIcon === "eye-slash") {
      setRightIcon("eye");

      setpshword(!showpasswor);
    }
  }, [rightIcon, showpasswor]);

  return (
    <View>
      <Text style={{ flexDirection: "row", color: 95 }}>
        {icons}
        {icontxt}
      </Text>
      <View>
        <TouchableOpacity onPress={() => handlePasswordVisibility()}>
          <View style={{}}>
            <Text
              style={{
                alignSelf: "flex-end",
                position: "absolute",
              }}
            >
              {eyes}
            </Text>
          </View>
        </TouchableOpacity>
        <TextInput
          value={values}
          onChangeText={setvalues}
          style={styles.input}
          keyboardType={ktype}
          secureTextEntry={showpasswor}
          placeholder={plholder}
        />
      </View>
    </View>
  );
};

export default Input;

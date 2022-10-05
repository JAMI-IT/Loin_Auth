import { View, Text, Alert, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "../component/styling";
import { useCallback, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import Botton from "../component/Botton";
import Input from "../component/Input";

export default function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpasswords, setPasswords] = useState("");
  const [pshow, setpshow] = useState(true);
  const [confirm, setconfirm] = useState(true);
  const [eyes, seteyes] = useState("eye");
  const [ceyes, setceyes] = useState("eye");

  const handleRegiser = useCallback(() => {
    if (!email) {
      Alert.alert("Please enter your Email ");
    }
    if (!password) {
      Alert.alert("Please enter your Password");
    }
    if (!cpasswords) {
      Alert.alert("Please enter your Confirm Password");
    } else {
      navigation.navigate("login");
    }
  }, [email, password, cpasswords]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.htext}> Register</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            height: 200,
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Signup</Text>
          </View>
          <ScrollView style={{ padding: 5 }}>
            <Input
              icon={<FontAwesome5 name="voicemail" size={24} color="black" />}
              iTxt="Email"
              valu={email}
              setvalu={setEmail}
              tshow="Email"
              keybtype="email"
              placehol="Email @"
              sect={false}
            />
            <Input
              icon={<FontAwesome5 name="lock" size={20} color="black" />}
              eye={<FontAwesome5 name={eyes} size={20} color="black" />}
              beys={<FontAwesome5 name="eye-slash" size={20} color="black" />}
              rclick={eyes}
              setrclick={seteyes}
              paswrd={pshow}
              setpaswrd={setpshow}
              setvalu={setPassword}
              iTxt="Password"
              valu={password}
              tshow="Password"
              keybtype="password"
              placehol="password"
            />
            <Input
              icon={<FontAwesome5 name="lock" size={20} color="black" />}
              eye={<FontAwesome5 name={ceyes} size={20} color="black" />}
              beys={<FontAwesome5 name="eye-slash" size={20} color="black" />}
              rclick={ceyes}
              setrclick={setceyes}
              paswrd={confirm}
              setpaswrd={setconfirm}
              iTxt="Password"
              valu={cpasswords}
              setvalu={setPasswords}
              tshow="Password"
              keybtype="password"
              placehol="password"
            />
          </ScrollView>
        </View>

        <View
          style={{
            height: 200,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => handleRegiser()}>
            <View>
              <Botton title="Register" navi="login" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <View>
              <Text style={styles.opacity}>Already have Account? Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

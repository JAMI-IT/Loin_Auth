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
  const [checkValidemail, setcheckValidemail] = useState(false);

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
        <ScrollView style={{ padding: 5 }}>
          <View>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Signup</Text>
          </View>
          <Input
            icon={<FontAwesome5 name="voicemail" size={24} color="black" />}
            iTxt="Email"
            valu={email}
            setvalu={
              (handleCheckemail = (text) => {
                let re = /\S+@\S+\.\S+/;
                let pattern =
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                setEmail(text);
                if (re.test(text) || pattern.test(text)) {
                  setcheckValidemail(false);
                } else {
                  setcheckValidemail(true);
                }
              })
            }
            tshow="Email"
            keybtype="email"
            placehol="Email @"
            sect={false}
          />
          {checkValidemail ? (
            <Text style={{ color: "red", alignSelf: "flex-end", fontSize: 12 }}>
              Wrong Formate..
            </Text>
          ) : (
            <Text style={styles.textFaild}></Text>
          )}
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
        </ScrollView>
      </View>
    </View>
  );
}

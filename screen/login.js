import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import validator from "validator";
import { useState, useCallback } from "react";
import styles from "../component/styling";
import Botton from "../component/Botton";
import Input from "../component/Input";
import { FontAwesome5 } from "@expo/vector-icons";

export default function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pshow, setpshow] = useState(true);
  const [eyes, seteyes] = useState("eye");

  const [checkValidemail, setcheckValidemail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlelogin = useCallback(() => {
    if (!email) {
      Alert.alert("Please enter your Email");
    } else if (!password) {
      Alert.alert("Please enter your  Password");
    } else {
      navigation.navigate("signup");
    }
  }, [email, password]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 200,
          alignItems: "center",
        }}
      >
        <Text style={styles.htext}> Wellcome </Text>
        <Text style={styles.htext}>Back</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <View>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Log-In</Text>
          </View>
          <View>
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
              <Text
                style={{ color: "red", alignSelf: "flex-end", fontSize: 12 }}
              >
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
              setvalu={(value) => {
                if (
                  validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                  })
                ) {
                  setErrorMessage("Is Strong Password");
                } else {
                  setErrorMessage("Is Not Strong Password");
                }
              }}
              iTxt="Password"
              valu={password}
              tshow="Password"
              keybtype="password"
              placehol="password"
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.opacity}>Forget Password?</Text>
          </TouchableOpacity>

          <View style={{ alignItems: "center", marginTop: 40 }}>
            <TouchableOpacity onPress={() => handlelogin()}>
              <Botton title="Login" navi="signup" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("signup")}>
              <Text style={styles.opacity}>Creat Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

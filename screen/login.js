import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import React from "react";
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
        <View>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>Log-In</Text>
        </View>
        <View>
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
      </View>
    </SafeAreaView>
  );
}

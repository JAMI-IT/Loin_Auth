import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../component/styling";
import Botton from "../component/Botton";
import Input from "../component/Input";

export default function login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.htext}> Wellcome Back</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={{ flexDirection: "row", color: 95 }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={15}
              color="black"
            />
            Password
          </Text>
          <Input
            icons=""
            tshow="Email"
            keybtype="email"
            placehol="Email @"
            sect="fale"
          />
          <Text style={{ flexDirection: "row", color: 95 }}>
            <MaterialIcons name="lock-outline" size={20} color="black" />
            Password
          </Text>
          <Input
            icons='<MaterialCommunityIcons name="email-outline" size={15} color="black" />'
            tshow="Password"
            keybtype="password"
            placehol="password"
            sect="true"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.opacity}>Forget Password?</Text>
        </TouchableOpacity>

        <View
          style={{ justifyContent: "center", alignItems: "center", top: 80 }}
        >
          <Botton title="Login" navi="signup" />

          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.opacity}>Creat Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

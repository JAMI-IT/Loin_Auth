import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../component/styling";
import Botton from "../component/Botton";

export default function login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.htext}> Register</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            height: 300,
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Signup</Text>
          </View>
          <ScrollView style={{}}>
            <View style={{}}>
              <Text style={{ flexDirection: "row", color: 95 }}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={15}
                  color="black"
                />
                Email
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="email"
                placeholder="Enter - Email"
              />
              <Text style={{ flexDirection: "row", color: 95 }}>
                <MaterialIcons name="lock-outline" size={20} color="black" />
                Password
              </Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Passwords"
              />
              <Text style={{ flexDirection: "row", color: 95 }}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Passwords"
              />
            </View>
          </ScrollView>
        </View>

        <View style={{ alignItems: "center" }}>
          <View>
            <Botton title="Register" navi="login" />
          </View>
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

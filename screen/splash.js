import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../component/styling";
import Button from "../component/Botton";
export default function splash({ navigation }) {
  return (
    <View style={styles.scontainer}>
      <View style={{ flex: 0.9 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={styles.shtext}>Find Your Gadget</Text>
        </View>
        <View style={[styles.simage]}>
          <Image
            style={{
              resizeMode: "contain",
              width: "100%",
            }}
            source={require("../assets/p1.png")}
          />
        </View>
      </View>
      <View style={{ flex: 0.1, marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Button
            title="Get Started"
            navi="login"
            bg="#5956e9"
            textclr="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

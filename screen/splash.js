import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../component/styling";
import Button from "../component/Botton";
export default function splash() {
  return (
    <View style={styles.scontainer}>
      <View style={{ top: 40 }}>
        <Text style={styles.shtext}>Find Your Gadget</Text>
      </View>
      <View style={styles.simage}>
        <Image
          style={{
            width: "100%",
            resizeMode: "contain",
          }}
          source={require("../assets/p1.png")}
        />
      </View>
      <Button title="Get Started" navi="login" bg="#5956e9" textclr="white" />
    </View>
  );
}

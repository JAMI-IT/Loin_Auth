import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  emailValidation: {
    color: "red",
    alignSelf: "flex-end",
  },
  scontainer: {
    flex: 1,
    backgroundColor: "#5956e9",
    alignItems: "center",
  },
  shtext: {
    flex: 1,
    padding: 20,
    color: "#fff",
    font: "Raleway",
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
  },
  simage: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#5956e9",
  },
  header: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  htext: {
    color: "#fff",
    font: "Raleway",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 60,
    fontWeight: "bold",
  },
  main: {
    height: "100%",
    backgroundColor: "orange",
    width: 314,
    justifyContent: "space-evenly",
  },
  footer: {
    flex: 1,
    backgroundColor: "orange",
    paddingHorizontal: 25,
    padding: 30,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  opacity: {
    color: "blue",
  },
  bview: {
    width: 250,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonz: {
    fontSize: 20,
    color: "white",
  },
});

export default styles;

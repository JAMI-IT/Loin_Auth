import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  scontainer: {
    flex: 1,
    backgroundColor: "#5956e9",
    alignItems: "center",
  },
  shtext: {
    flex: 0,
    // backgroundColor: "red",
    color: "#fff",
    font: "Raleway",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  simage: {
    marginBottom: 30,
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#5956e9",
  },
  header: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  htext: {
    color: "#fff",
    font: "Raleway",
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
    height: 600,
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
    marginBottom: 30,
  },
  opacity: {
    color: "blue",
  },
  bview: {
    backgroundColor: "#5956e9",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 60,
  },
  buttonz: {
    fontSize: 20,
    color: "white",
  },
});

export default styles;

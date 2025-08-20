import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const logo = require("../assets/logo-removebg-preview.png");

const LoginSignUP = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View style={styles.userinput}>
        <Text style={styles.heading}>Create Account</Text>

        <TextInput style={styles.input} placeholder="Enter Your User Name" />
        <TextInput style={styles.input} placeholder="Enter Your Email" />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Your Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userinput}>
        <Text style={styles.iconheading}>----- Or Login With -----</Text>
      </View>

      <View style={styles.socialIcons}>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: "#db4437" }]}>
          <Icon name="google" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: "#4267B2" }]}>
          <Icon name="facebook" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: "#1DA1F2" }]}>
          <Icon name="twitter" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSignUP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  userinput: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#0059ff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "60%",
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    elevation: 3,
  },
  iconheading: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
    textAlign: "center",
  },
});

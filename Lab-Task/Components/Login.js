import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

const logo = require("../assets/logo-removebg-preview.png");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (!storedUser) {
        Alert.alert("Error", "No account found. Please sign up first.");
        return;
      }

      const user = JSON.parse(storedUser);

      if (email === user.email && password === user.password) {
        Alert.alert("Success", "Login Successful!");
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong!");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View style={styles.userinput}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupText}>
            Don’t have an account? <Text style={{ color: "#0059ff" }}>Sign Up</Text>
          </Text>
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

export default Login;

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
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#0059ff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  signupText: {
    marginTop: 15,
    fontSize: 14,
    color: "#666",
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
  },
  iconheading: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
    textAlign: "center",
  },
});

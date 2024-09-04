import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Login() {
  const { signIn } = useAuth();
  const handleGoogleLogin = () => {
    signIn();
  };

  const handleKakaoLogin = () => {
    signIn();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleGoogleLogin}>
        <Image
          source={require("../../assets/images/google-logo.png")}
          style={styles.buttonLogo}
        />
        <Text style={styles.buttonText}>Google로 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleKakaoLogin}>
        <Image
          source={require("../../assets/images/kakao-logo.png")}
          style={styles.buttonLogo}
        />
        <Text style={styles.buttonText}>카카오로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
    maxWidth: 300,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    gap: 5,
  },
  buttonLogo: {
    width: 24,
    height: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

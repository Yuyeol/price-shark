import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "@/hooks/useAuth";

export default function MyPageScreen() {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>마이페이지</Text>
      {user && (
        <Text style={styles.userInfo}>
          안녕하세요, {user.username || "사용자"}님!
        </Text>
      )}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

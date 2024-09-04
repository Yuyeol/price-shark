import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

interface IUser {
  username: string;
  id: string;
}

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    // 앱 시작 시 저장된 사용자 정보 확인
    AsyncStorage.getItem("user").then((savedUser) => {
      if (savedUser) setUser(JSON.parse(savedUser));
    });
  }, []);

  const signIn = async () => {
    // 더미 인증: 항상 성공으로 처리
    const dummyUser = { username: "test", id: "1" };
    await AsyncStorage.setItem("user", JSON.stringify(dummyUser));
    setUser(dummyUser);
    router.replace("/");
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
    router.replace("/login");
  };

  return { user, signIn, signOut };
}

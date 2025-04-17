import { useState } from "react";
import { storageService } from "../services/storageService";

export const useAuthActions = () => {
  const [authData, setAuthData] = useState(() => {
    const stored = storageService.getItem("authData");
    return stored ? stored : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error de autenticación");
      }

      const data = await response.json();
      storageService.setItem("authData", data);
      setAuthData(data);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    storageService.removeItem("authData");
  };

  return { authData, login, logout, loading, error };
};

import { useState, useEffect } from "react";
import { storageService } from "../services/storageService";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const authData = storageService.getItem("authData");

        if (!authData) {
          setLoading(false);
          return;
        }

        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authData.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Sesión expirada");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        setError(error.message);
        storageService.removeItem("authData");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return { user, loading, error };
};

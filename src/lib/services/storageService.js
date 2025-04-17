export const storageService = {
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error guardando en local storage:", error);
    }
  },
  getItem: (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error leyendo en local storage:", error);
      return null;
    }
  },
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error eliminando en local storage:", error);
    }
  },
};

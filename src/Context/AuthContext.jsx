import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const checkIsAdmin = () => {
    const user_type = localStorage.getItem("user_type") || "";

    if (user_type === "1") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAdmin, checkIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

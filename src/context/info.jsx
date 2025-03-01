import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
export const infoContext = createContext([]);

export const useInfo = () => {
  const info = useContext(infoContext);
  return info;
};

export const InfoProvider = (props) => {
  const [login, setLogin] = useState(
    () => JSON.parse(localStorage.getItem("login")) || false
  );
  const admin = [
    {
      email: "admin@gmail.com",
      password: "admin@123",
    },
  ];
  const [roles, setRoles] = useState(
    () => JSON.parse(localStorage.getItem("roles")) || []
  );
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );

  const [requests, setRequests] = useState(
    () =>
      JSON.parse(localStorage.getItem("requests")) || [
        {
          id: 1,
          username: "Alice",
          email: "alice@example.com",
          role: "Admin",
        },
        {
          id: 2,
          username: "Bob",
          email: "bob@example.com",
          role: "Moderator",
        },
        {
          id: 3,
          username: "Charlie",
          email: "charlie@example.com",
          role: "User",
        },
      ]
  );
  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);
  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
  }, [login]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <infoContext.Provider
      value={{
        login,
        setLogin,
        admin,
        roles,
        setRoles,
        requests,
        setRequests,
        users,
        setUsers,
      }}
    >
      {props.children}
    </infoContext.Provider>
  );
};

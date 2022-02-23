import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { userAuth, setUserAuth } = useContext(AuthContext);
  const logIn = (user, authToken) => {
    setUserAuth(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUserAuth({
      userID: 0,
      userName: "",
      fullName: "",
      token: "",
      isAuthorized: false,
    });
    authStorage.removeToken();
  };

  return { userAuth, logIn, logOut };
};

export default useAuth;

const key = "authToken";
const storeToken = (authToken:string) => {
  try {
    localStorage.setItem(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = () => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const authStorage = {
  getToken,
  removeToken,
  storeToken,
};

export default authStorage;

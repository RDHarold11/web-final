import axios from "axios";

const URL = "http://localhost:5500/api/users/login";

const login = async (userData) => {
  try {
    const response = await axios.post(URL, userData);
    if (response.data) {
      console.log(userData);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = { login, logout };

export default authService;

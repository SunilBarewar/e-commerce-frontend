import axios from "../../api/axios";

const useAuthApi = () => {
  const login = async (data) => {
    return await axios.post("/auth/login", data, {
      withCredentials: true,
    });
  };
  const signup = async (data) => {
    return await axios.post("/auth/signup", data, {
      withCredentials: true,
    });
  };
  const logout = async () => {
    return await axios.post("/auth/login", "", {
      withCredentials: true,
    });
  };

  return {
    login,
    logout,
    signup,
  };
};

export default useAuthApi;

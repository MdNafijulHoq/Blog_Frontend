import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const AuthStore = create((set) => ({
  AuthUser: null,
  IsSingingUp: false,
  IsSigninIn: false,

  signUp: async (data) => {
    set({ IsSingingUp: true });
    try {
      let response = await axios.post("http://localhost:9292/api/user/create", data);
      if (response.data.status === "success") {
        toast.success("Sign Up Success");
        set({ AuthUser: response.data.data });
      } else {
        toast.error("User Already Exist");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ IsSingingUp: false });
    }
  },

  signIn: async (data) => {
    set({ IsSigninIn: true });
    try {
      let response = await axios.post("http://localhost:9292/login", data);
      if (response.data.status === "success") {
        toast.success("Sign In Success");
        set({ AuthUser: response.data.data });
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ IsSigninIn: false });
    }
  },

 
}));

export default AuthStore;

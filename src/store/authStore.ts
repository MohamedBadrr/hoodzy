import { create } from "zustand";
const USER_KEY = "auth_user";

type AuthStateActions = {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  initialize: () => void;
  login: (token: string, user: User | null) => void;
  logout: () => void;
  setUser: (user: User) => void;
};

export const useAuthStore = create<AuthStateActions>((set) => ({
  token: null,
  user: null,
  isLoading: true,
  isAuthenticated: false,
  initialize: () => {
    try {
      const token = localStorage.getItem("token");
      const userJson = localStorage.getItem(USER_KEY);
      const user = userJson ? JSON.parse(userJson) : null;
      set({
        token,
        user,
        isAuthenticated: !!(token && user),
        isLoading: false,
      });
    } catch {
      set({ isLoading: false });
    }
  },
  login: (token: string, user: User | null) => {
    localStorage.setItem("token", token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    set({ token, user, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem(USER_KEY);
    set({ token: null, user: null, isAuthenticated: false });
  },
  setUser: (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    set({ user });
  },
}));


export const getAuthToken = () => useAuthStore.getState().token;
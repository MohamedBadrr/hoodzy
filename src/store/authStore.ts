import { create } from "zustand";
import type {
  LoginFormValues,
  RegisterFormValues,
  StoredAccount,
} from "../features/auth/types";

const USER_KEY = "auth_user";
const TOKEN_KEY = "token";
const ACCOUNTS_KEY = "accounts";

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const createToken = (accountId: string) =>
  `local-${accountId}-${Date.now().toString(36)}`;

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

const readAccounts = (): StoredAccount[] => {
  const accountsJson = localStorage.getItem(ACCOUNTS_KEY);
  if (!accountsJson) return [];

  const accounts = JSON.parse(accountsJson);
  return Array.isArray(accounts) ? accounts : [];
};

const saveAccounts = (accounts: StoredAccount[]) => {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
};

const accountToUser = (account: StoredAccount): User => ({
  id: account.id,
  name: account.name,
  email: account.email,
  firstName: account.firstName,
  lastName: account.lastName,
});

type AuthResult = {
  success: boolean;
  user?: User;
  error?: string;
};

type AuthStateActions = {
  token: string | null;
  user: User | null;
  accounts: StoredAccount[];
  isLoading: boolean;
  isAuthenticated: boolean;
  initialize: () => void;
  login: (token: string, user: User | null) => void;
  loginWithCredentials: (values: LoginFormValues) => AuthResult;
  registerAccount: (values: RegisterFormValues) => AuthResult;
  logout: () => void;
  setUser: (user: User) => void;
};

export const useAuthStore = create<AuthStateActions>((set, get) => ({
  token: null,
  user: null,
  accounts: [],
  isLoading: true,
  isAuthenticated: false,
  initialize: () => {
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      const userJson = localStorage.getItem(USER_KEY);
      const user = userJson ? JSON.parse(userJson) : null;
      const accounts = readAccounts();
      set({
        token,
        user,
        accounts,
        isAuthenticated: !!(token && user),
        isLoading: false,
      });
    } catch {
      set({ isLoading: false });
    }
  },
  login: (token: string, user: User | null) => {
    localStorage.setItem(TOKEN_KEY, token);
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
    set({ token, user, isAuthenticated: !!(token && user) });
  },
  loginWithCredentials: (values: LoginFormValues) => {
    const email = normalizeEmail(values.email);
    const account = get().accounts.find((item) => item.email === email);

    if (!account || account.password !== values.password) {
      return { success: false, error: "Email or password is incorrect." };
    }

    const user = accountToUser(account);
    get().login(createToken(account.id), user);

    return { success: true, user };
  },
  registerAccount: (values: RegisterFormValues) => {
    const email = normalizeEmail(values.email);
    const accounts = get().accounts;
    const accountExists = accounts.some((account) => account.email === email);

    if (accountExists) {
      return {
        success: false,
        error: "An account with this email already exists.",
      };
    }

    const firstName = values.firstName.trim();
    const lastName = values.lastName.trim();
    const account: StoredAccount = {
      id: createId(),
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      password: values.password,
    };
    const nextAccounts = [...accounts, account];
    const token = createToken(account.id);
    const user = accountToUser(account);

    saveAccounts(nextAccounts);
    get().login(token, user);
    set({ accounts: nextAccounts });

    return { success: true, user };
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    set({ token: null, user: null, isAuthenticated: false });
  },
  setUser: (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    set({ user });
  },
}));

export const getAuthToken = () => useAuthStore.getState().token;

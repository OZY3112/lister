import create from "zustand";
import { persist } from "zustand/middleware";

const settings = (set) => ({
  theme: "dark",
  pri: "priDark",
  sec: "secDark",
  changeTheme: (newTheme, pri, sec) =>
    set({ theme: newTheme, pri: pri, sec: sec }),
});

const useSettings = create(
  persist(settings, {
    name: "auth",
  })
);
export default useSettings;

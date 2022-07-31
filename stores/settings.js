import create from "zustand";
import { persist } from "zustand/middleware";

const settings = (set) => ({
  theme: "light",
  changeTheme: (newTheme) => set({ theme: newTheme }),
});

const useSettings = create(
  persist(settings, {
    name: "auth",
  })
);
export default useSettings;

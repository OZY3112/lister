import SettingsIcon from "@mui/icons-material/Settings";
import useAuthStore from "../stores/authStore";

export default function Nav() {
  const { userProfile } = useAuthStore();
  return (
    <nav className="w-screen h-[70px] bg-pri">
      <div className="text-white ">
        <SettingsIcon />
      </div>
    </nav>
  );
}

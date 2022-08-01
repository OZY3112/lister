import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import useAuthStore from "../stores/authStore";

export default function Nav() {
  const { userProfile }: any = useAuthStore();
  console.log(userProfile);
  return (
    <nav className="w-screen h-[70px] bg-pri justify-between flex px-10">
      <div />
      <Wrap className="text-white my-auto">
        <WrapItem className="my-auto">
          <SettingsIcon sx={{ width: 45, height: 45 }} />
        </WrapItem>
        <WrapItem className="">
          <Avatar
            sx={{ width: 12, height: 12 }}
            src={`${userProfile?.picture}`}
          />
        </WrapItem>
      </Wrap>
    </nav>
  );
}

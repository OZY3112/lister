import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";

export default function Nav() {
  
  return (
    <nav className=" border-white border-b-[2px]  p-4">
      <section className=" my-auto flex justify-between  ">
        <Wrap className="my-auto">
          <WrapItem>
            {/* <Avatar
              sx={{ width: 12, height: 12, marginY: "auto" }}
              src={`${user && user.picture}`}
            /> */}
          </WrapItem>
          <WrapItem>
            <SettingsIcon sx={{ width: 45, height: 45, marginY: "auto" }} />
          </WrapItem>
        </Wrap>
        <div className="my-auto">
          <AddIcon sx={{ width: 45, height: 45 }} />
        </div>
      </section>
    </nav>
  );
}

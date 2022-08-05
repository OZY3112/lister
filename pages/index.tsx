import type { NextPage } from "next";
import Head from "next/head";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import decode from "jwt-decode";
import useAuthStore from "../stores/authStore";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import { useState } from "react";
import supabase from "../stores/supa";

const Home: NextPage = () => {
  const { addUser, user }: any = useAuthStore();
  const Google: any = () => {
    useGoogleOneTapLogin({
      onSuccess: (res: any) => addUser(decode(res.credential)),
      onError: () => {
        console.log("error");
      },
    });
    return;
  };
  const [note, setNote] = useState([]);

  const fetchUser = async () => {
    const { data } = await supabase.from("notes").select();
    console.log(data);
  };
  const uploadUser = async () => {
    const { data, error } = await supabase
      .from("users")
      .insert([{ notes: "someValue", userId: "otherValue" }]);
    console.log(data, error);
  };

  return (
    <div className="bg-bg">
      <Head>
        <title>listers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={uploadUser}>upload</button>
      {!user && <Google />}
      <section className="flex w-screen">
        <Sidebar setNote={setNote} note={note} />
        <Note note={note} />
      </section>
    </div>
  );
};

export default Home;

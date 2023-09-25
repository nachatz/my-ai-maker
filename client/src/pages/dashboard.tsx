import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Dashboard() {
const { data: sessionData } = useSession();

  return (
    <>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {!sessionData && <span>No user</span>}
    </>
  );
}

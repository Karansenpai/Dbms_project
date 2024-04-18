import React from "react";
import { signIn, signOut } from "@/auth.js"
const page = () => {
  return (
    <div className="p-10 m-10">
      <form
        action={async () => {
          "use server";
        //   await signIn();
        await signOut();
        }}
      >
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default page;

import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import AllPosts from "./AllPosts";
import { useRouter } from "next/router";

import { AuthContext } from "../../components/admin/Auth";
import { Button } from "@mui/material";
import AddPost from "./AddPost";

function AdminPage() {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (
      <>
        <div style={{ display: "flex" }}>
          <AddPost />
          <AllPosts />
        </div>
        <Sidebar />
      </>
    );
  } else {
    return (
      <div style={{ position: "absolute", left: "50%", translate: "-50%" }}>
        <h1>
          Not Signed in, Please{" "}
          <Button onClick={() => router.push("/login")}>Log in</Button>
        </h1>
      </div>
    );
  }
}

export default AdminPage;

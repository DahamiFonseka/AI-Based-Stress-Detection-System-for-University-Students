import React from "react";
import { useAuth } from "../contexts/authContext"; 

function SignOutButton() {
  const { handleSignOut } = useAuth();

  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;

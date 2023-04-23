import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button       {...props}
    className="button__sign-up" variant="outline" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
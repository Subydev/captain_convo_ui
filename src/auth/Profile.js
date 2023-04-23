import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Avatar, AvatarBadge, Stack } from "@chakra-ui/react";

const ProfileButton = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (!user) {
    return null;
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
          {/* <Avatar>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar> */}

          {/* You can also change the borderColor and bg of the badge */}
          {/* <Avatar>
            <AvatarBadge
              borderColor="papayawhip"
              bg="tomato"
              boxSize="1.25em"
            />
          </Avatar> */}
        <Avatar size='md' name="Christoph Winston" src={user.picture}>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>

        {/* <img src={user.picture} alt={user.name} /> */}
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
    )
  );
};

export default ProfileButton;
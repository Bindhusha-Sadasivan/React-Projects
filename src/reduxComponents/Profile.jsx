import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h2>{user.fname}</h2>
      <h3>{user.email}</h3>
      <h3>{user.designation}</h3>
    </div>
  );
};

export default Profile;

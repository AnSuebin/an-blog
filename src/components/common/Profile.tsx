import Image from "next/image";
import React from "react";
import profileImage from "@/../public/images/profile.png";
import SubmitButton from "./button/submitButton";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <Image
          src={profileImage}
          alt="profile image"
          className="w-52 rounded-full"
        />
      </div>
      <div className="text-center mt-2">
        <div className="font-semibold">I can do it</div>
        Because I'm a Big Developer
      </div>
      <SubmitButton />
    </div>
  );
};

export default Profile;

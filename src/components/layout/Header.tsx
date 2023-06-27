import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-7 px-10 items-end">
      <div className="text-base font-bold">An's Blog</div>
      <div className="flex">
        <div className="">home</div>
        <div className="ml-3">about</div>
        <div className="ml-3">posts</div>
        <div className="ml-3">contact</div>
      </div>
    </div>
  );
};

export default Header;

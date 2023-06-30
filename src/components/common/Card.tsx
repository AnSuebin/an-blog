import Image from "next/image";
import React from "react";
import profileImage from "@/../public/images/profile.png";
import Label from "./label/Label";

const Card = () => {
  return (
    <div className="rounded-lg w-full border border-solid ">
      <div className="flex justify-center align-middle">
        <Image src={profileImage} alt="card image" className="w-52" />
      </div>
      <div className="w-full p-5 border-t border-slate-300">
        <div className="text-xs font-light text-right mb-3">2023-06-28</div>
        <div className="text-base font-semibold text-center ">2023년 리뷰</div>
        <div className="text-xs font-light text-center mb-3">
          올해는 어떤 기술 스텍이 인기가 많을까?
        </div>
        <div className="flex justify-center align-middle mt-2">
          <Label text="기본 100%" />
        </div>
      </div>
    </div>
  );
};

export default Card;

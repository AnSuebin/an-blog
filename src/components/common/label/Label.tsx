import React, { FC } from "react";

interface Props {
  text: string;
}

const Label: FC<Props> = ({ text }) => {
  return (
    <div className="bg-violet-200 flex justify-center align-middle text-xs text-violet-800 w-40 rounded-full">
      {text}
    </div>
  );
};

export default Label;

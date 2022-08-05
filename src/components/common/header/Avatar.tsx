import avt from "public/avt.jfif";
import { useState } from "react";

export interface AvatarProps {
  age?: number;
}

export function Avatar({ age }: AvatarProps) {
  const [isActive, setIsActice] = useState(false);

  const handleClickAvatar = (e: any) => {
    setIsActice(!isActive);
  };
  return (
    <div className="relative">
      <div className="avatar" onClick={handleClickAvatar}>
        <p className="rounded-full w-4 h-4">
          <img className="rounded-full" src={avt} alt="avatar" />
        </p>
      </div>
      {isActive && (
        <div className="absolute top-7 rounded-md right-0 w-36 text-white dropdown-content bg-colorprimary">
          <ul className="p-2 text-lessxs cursor-pointer">
            <li>
              <h3>Christian Dog</h3>
              <p className="opacity-30">Frone-End</p>
            </li>
            <li>
              <p className="border-t bg-white opacity-50 h-[0.1px] -mr-2 -ml-2 my-2"></p>
            </li>
            <li>Profile</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      )}
    </div>
  );
}

"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const hasFavourited = false;
  const toggleFavourite = () => {};
  return (
    <div
      onClick={toggleFavourite}
      className="
      relative
      hover:opacity-80
      hover:scale-110
      transition
      cursor-pointer
     "
    >
      <AiOutlineHeart
        size={26}
        className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]
          "
      />

      <AiFillHeart
        size={22}
        className={
          hasFavourited
            ? `fill-rose-500  hover:scale-110`
            : `fill-neutral-500/70  hover:scale-110
            `
        }
      />
    </div>
  );
};

export default HeartButton;

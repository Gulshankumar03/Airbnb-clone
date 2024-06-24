"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavourite from "../hooks/useFavourite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavourited, toggleFavourite } = useFavourite({
    listingId,
    currentUser,
  });
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
        className={
          hasFavourited
            ? `fill-black absolute -top-[2px] -right-[2px]`
            : `fill-white absolute -top-[2px] -right-[2px]`
        }
      />

      <AiFillHeart
        size={22}
        className={
          hasFavourited
            ? `fill-rose-500  hover:scale-110`
            : `fill-slate-400/80  hover:scale-110`
        }
      />
    </div>
  );
};

export default HeartButton;

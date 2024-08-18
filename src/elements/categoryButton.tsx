"use client";
import { cn } from "@/lib/utils";
import { FCProps } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa6";

const CategoryButton: FCProps<{
  text: string;
  category: string | null;
  setCategory: Dispatch<SetStateAction<string | null>>;
}> = ({ text, category, setCategory }) => {
  return (
    <div
      onClick={() => {
        if (category == text) {
          setCategory(null);
          return;
        }
        setCategory(text);
      }}
      className={cn(
        "w-48 rounded-full capitalize border-stone-800 border-2 hover:bg-stone-800 hover:text-white flex justify-center px-4 py-1 duration-200"
      )}
      style={
        category == text ? { backgroundColor: "#292524", color: "white" } : {}
      }
    >
      {text}
      {category == text && <FaCheck className="ml-2 my-1" />}
    </div>
  );
};

export default CategoryButton;

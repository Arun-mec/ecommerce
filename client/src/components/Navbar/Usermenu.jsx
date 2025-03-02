import React from "react";
import Search from "../Search/Search";

const Usermenu = ({ className }) => {
  const userClass = `flex justify-end items-center gap-3 ${className}`;
  return (
    <div className={userClass}>
      <Search />
      <span class="material-symbols-outlined text-dark cursor-pointer text-sm">person</span>
      <span class="material-symbols-outlined text-dark cursor-pointer text-sm">favorite</span>
      <span className="cursor-pointer flex items-center gap-1">
      <span class="material-symbols-outlined">shopping_bag</span>
        <span className="bg-accent p-1 rounded">10</span>
      </span>
    </div>
  );
};

<span class="">person</span>;
export default Usermenu;

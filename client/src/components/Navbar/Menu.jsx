import React from "react";

const Menu = ({ menu = menu, className }) => {
  const menuItems = ["SHOES","MEN", "WOMEN", "KIDS", "SPORTS", "LIFESTYLE", ...menu];
  const menuClassName = `flex justify-center gap-5 ${className}`;
  return (
    <div className={menuClassName}>
      {menuItems.map((menuItem, key) => {
        return <span key={key} className="cursor-pointer hover:underline font-bold">{menuItem}</span>;
      })}
    </div>
  );
};

export default Menu;

import type React from "react";

interface Props {
  children: React.ReactNode;
}

const MenuWrapper: React.FC<Props> = ({ children }) => {
  return <ul className="flex gap-5">{children}</ul>;
};

MenuWrapper.displayName = "MenuWrapper";

export default MenuWrapper;

import type React from "react";

interface Props {
  children?: React.ReactNode;
  name: string;
  className?: string;
}

const Submit: React.FC<Props> = ({ children, name, className }) => {
  return (
    <button
      className={`p-1 border-2 border-gray-200 w-full rounded-sm outline-none ${
        className ?? ""
      }`}
      id={name}
      name={name}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Submit;

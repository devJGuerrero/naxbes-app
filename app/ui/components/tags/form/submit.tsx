import type React from "react";

interface Props {
  children?: React.ReactNode;
  name: string;
  className?: string;
}

const Submit: React.FC<Props> = ({ children, name, className }) => {
  return (
    <button
      className={
        className ??
        `p-2 w-full bg-blue-700 text-white hover:bg-blue-600 rounded-md outline-none`
      }
      id={name}
      name={name}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Submit;

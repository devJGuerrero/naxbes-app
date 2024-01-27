import type React from "react";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="pt-12 px-36">{children}</div>;
};

Wrapper.displayName = "Wrapper";

export default Wrapper;

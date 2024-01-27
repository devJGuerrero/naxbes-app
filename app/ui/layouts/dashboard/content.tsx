import type React from "react";

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return <div className="pt-12 px-36">{children}</div>;
};

Content.displayName = "Content";

export default Content;

import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Head: React.FC<Props> = ({ children, className }) => {
  return (
    <thead className={className ?? ""}>
      <tr>{children}</tr>
    </thead>
  );
};

export default Head;

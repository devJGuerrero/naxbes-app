import type React from "react";
import Row from "@/app/ui/components/tags/table/row";
import Head from "@/app/ui/components/tags/table/head";
import Body from "@/app/ui/components/tags/table/body";
import Cell from "@/app/ui/components/tags/table/cell";
import HeadCell from "@/app/ui/components/tags/table/head-cell";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Table: React.FC<Props> = ({ children, className }) => {
  return <table className={className ?? ""}>{children}</table>;
};

Table.displayName = "Table";

export default Object.assign(Table, { Head, Body, Row, Cell, HeadCell });

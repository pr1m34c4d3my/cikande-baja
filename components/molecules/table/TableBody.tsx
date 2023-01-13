import React from "react";
import DataCell from "../../atoms/table/DataCell";

type Value = {
  type: string;
  size: string;
  detail: string;
};

type Props = {
  data: Value[];
};

const TableBody = ({ data }: Props) => {
  return (
    <tbody>
      {data.map((v: Value, index) => {
        return (
          <tr key={index}>
            <DataCell value={v.type} />
            <DataCell value={v.size} />
            <DataCell value={v.detail} />
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;

type Props = {
  value: string | number | JSX.Element;
};

export default function DataCell(props: Props) {
  return <td className="py-5 px-1 text-[14px]">{props.value}</td>;
}

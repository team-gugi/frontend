export default function TableHeadText({ text }: { text: string }) {
  return (
    <th className="font-semibold grow shrink-0 text-14 min-w-22">{text}</th>
  );
}

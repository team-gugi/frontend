export default function TableBodyText({ text }: { text: string }) {
  return (
    <td className="min-w-32 text-14 text-center grow shrink-0 font-normal leading-[120%] -tracking-[4%]">
      {text}
    </td>
  );
}

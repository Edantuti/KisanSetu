export function ContractAttribtues({
  type,
  data,
}: {
  type: string;
  data: string;
}) {
  return (
    <div className="border rounded-md p-4 border-solid border-neutral-300">
      <h3 className="font-semibold">{type}</h3>
      <p className="">{data}</p>
    </div>
  );
}

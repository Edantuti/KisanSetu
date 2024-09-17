import { getContractbyID } from "@/app/actions";
import { PdfGenerator } from "@/components/contract/contract-print";
import { Fragment } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { data, error } = await getContractbyID(params.id);
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  return (
    <div className="flex justify-center p-10 max-w-[50]">
    <PdfGenerator name={data.name}>
      
      <section className="mx-auto space-y-5 font-medium my-auto text-xs max-w-[80vw] ">
        {/* <div> */}
        <h1 className="text-2xl text-center my-5 font-serif">AGREEMENT</h1>
        <p>
          This AGREEMENT made this day of{" "}
          <span className="font-medium underline underline-offset-4">
            {new Date(data.created_at).toDateString()}
          </span>{" "}
          BETWEEN{" "}
          <span className="font-medium underline underline-offset-4">
            {" "}
            {data.buyer.name}{" "}
          </span>
          , a company incorporated under the Companies Act 1956, and having its
          registered office at
          <span className="font-medium underline underline-offset-4">
            {" "}
            {`${data.buyer.address},${data.buyer.district},${data.buyer.state
              .split("-")
              .map((value) => `${value[0].toUpperCase()}${value.slice(1)}`)
              .reduce(
                (value, sum) => value + " " + sum,
              )},Pincode:${data.buyer.pincode}`}{" "}
          </span>
          represented by
          <span className="font-medium underline underline-offset-4">
            {" "}
            {data.representative}
          </span>{" "}
          ( hereinafter referred to as the company, which expression shall
          include its successors and assignees of the one part)
        </p>
        <p className="text-center">AND</p>
        <p>
          {data.ContractFarmer.map((value) => (
            <Fragment key={value.contract_id}>
              <span className="font-medium underline underline-offset-4">
                {value.Farmer!.name}
              </span>{" "}
              S/O{" "}
              <span className="font-medium underline underline-offset-4">
                {value.Farmer!.father_name}
              </span>{" "}
              aged{" "}
              <span className="font-medium underline underline-offset-4">
                {Math.floor(
                  new Date().getUTCFullYear() -
                    new Date(value.Farmer!.date_of_birth!).getUTCFullYear(),
                )}{" "}
                years
              </span>
              ,
            </Fragment>
          ))}{" "}
          hereinafter referred to as the FARMER, (the expression farmer shall
          include his/her legal heirs, representatives, successors, testators,
          administrators assignees) of the other part):
        </p>
        <p>
          WHEREAS the Company is a Registered 100% EOU mainly engaged in the
          processing and export of vegetables, fresh fruits, pickled and in
          brine form for all purposes and for this purpose has its factory and
          processing facilities at
          <span className="font-medium underline underline-offset-4">
            {" "}
            {`${data.buyer.address},${data.buyer.district},${data.buyer.state
              .split("-")
              .map((value) => `${value[0].toUpperCase()}${value.slice(1)}`)
              .reduce(
                (value, sum) => value + " " + sum,
              )},Pincode:${data.buyer.pincode}`}{" "}
          </span>
          . INDIA and was on the look out for suitable farmers who would be
          willing to grow the said products particularly
          {<span className="font-medium underline underline-offset-4"></span>}
          etc., by entering into a long term arrangement with the Company and
          also by undertaking to sell their entire produce of the said crop to
          the Company alone.
        </p>
        <p>
          AND WHEREAS the Farmer is owning and/or in possession of agricultural
          land suitable for growing the crops required by the Company for export
          and accordingly is desirous of entering into an agreement with the
          Company for growing the said crop as per the specification, terms and
          conditions that are stipulated by the Company including selling of
          100% of the crop produced by the farmer to the Company on mutually
          acceptable terms and conditions and accordingly this agreement is
          entered into between the parties. AND WHEREAS the farmer herein after
          understanding the requirements of the Company and their terms and
          requirements has agreed to the terms set out and has agreed to comply
          with the same. The parties have consequently reduced into writing the
          terms and conditions as details hereinafter.
        </p>
        <div>
          <p>NOW THIS AGREEMENT BETWEEN THE PARTIES WITNESSETH AS FOLLOWS:</p>
          <ol className="list-decimal ml-28">
            {data.Clauses.map((value) => (
              <li key={value.id}>{value.description}</li>
            ))}
          </ol>
        </div>
        <p>
          IN WITTNESS WHEREOF both the parties have affixed their seal/signature
          on the day........ month................. and the year............ in
          the presence of following witnesses.
        </p>
        <div className="flex items-center justify-around">
          <div className="flex flex-col space-y-10">
            <h4>COMPANY</h4>
            <h4>WITNESS</h4>
          </div>
          <div className="flex flex-col space-y-10">
            <h4>FARMER</h4>
            <h4>WITNESS</h4>
          </div>
        </div>
        {/* </div> */}
      </section>
      
    </PdfGenerator>
    </div>
  );
}
//TODO: Add puppeteer for generating PDF
//Source : https://stackoverflow.com/questions/70931969/how-can-i-export-a-nextjs-page-as-pdf

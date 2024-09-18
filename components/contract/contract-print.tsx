"use client";
import React, { ReactNode, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "../ui/button";
export const PdfGenerator = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: name,
  });

  return (
    <div className="flex flex-col">
      <div ref={componentRef}>{children}</div>
      <div className="flex gap-5 mt-10">
        <Button onClick={handlePrint} className="w-fit mx-auto">
          Print / Download as PDF
        </Button>
        <Button className="w-fit mx-auto">
          Continue for Digital Signature And E-Stamping
        </Button>
      </div>
    </div>
  );
};

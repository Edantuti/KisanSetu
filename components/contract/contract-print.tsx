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
  });

  return (
    <div className="flex flex-col">
      <div ref={componentRef}>{children}</div>
      <Button onClick={handlePrint} className="w-fit mx-auto">
        Print / Download as PDF
      </Button>
    </div>
  );
};

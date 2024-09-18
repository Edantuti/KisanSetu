"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Dummy data
// 1 & 2 == others
// 3 & 5 == monitor
// 6 == Dispute Settlement Methods
// 4 = termination
// The borrower agrees to make monthly installment payments of the principal and interest, due on the last day of each month. Each payment must be accompanied by a digital signature from both parties to acknowledge receipt and completion of payment. Failure to make timely payments or sign the acknowledgment will result in a 5% late fee on the outstanding balance and may trigger further legal action as specified herein.
const contractData = [
  {
    "contract_text": "The party of the first part agrees to indemnify and hold harmless the party of the second part from any and all claims, liabilities, and damages arising from the engagement under this agreement, including but not limited to acts of negligence, gross negligence, and willful misconduct.",
    "impact_analysis": "Positive",
    "simplified_text": "Party of the first part agrees to indemnify and hold harmless the party of the second part from any and all claims, liabilities, and damages arising from the engagement under this agreement."
  },
  {
    "contract_text": "Notwithstanding any provision of this agreement, the contractor shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, loss of business, or diminution in value arising from or related to this agreement.",
    "impact_analysis": "Negative",
    "simplified_text": "Contractors are not liable for any indirect, incidental, consequential, or punitive damages. Contractors will not be liable for loss of profits, loss of business, or diminution in value arising from or related to this agreement."
  },
  {
    "contract_text": "The borrower shall be charged an interest rate of 12% per annum on any outstanding principal balance. The failure to repay the principal and interest on or before the due date will result in the accrual of additional penalties as specified herein.",
    "impact_analysis": "Negative",
    "simplified_text": "The borrower shall be charged an interest rate of 12% per annum on any outstanding principal balance. Failure to repay the principal and interest on or before the due date will result in the accrual of additional penalties as specified herein."
  },
  {
    "contract_text": "Upon default, the lender reserves the right to accelerate all outstanding payments, including any accrued interest and penalties, and to initiate legal proceedings to recover the same.",
    "impact_analysis": "Negative",
    "simplified_text": "The lender reserves the right to accelerate all outstanding payments, including any accrued interest and penalties, and to initiate legal proceedings to recover the same."
  },
  {
    "contract_text": "The farmer is entitled to a minimum support price (MSP) for all crops as per the government regulations. Any deviation from the MSP shall be considered null and void, and the contractor shall pay the difference.",
    "impact_analysis": "Negative",
    "simplified_text": "The farmer is entitled to a minimum support price (MSP) for all crops as per the government regulations. Any deviation from the MSP shall be considered null and void, and the contractor shall pay the difference."
  },
  {
    "contract_text": "Any disputes arising from this agreement shall be resolved through arbitration as per the Arbitration and Conciliation Act, and the decisions of the arbitrator shall be binding on all parties involved.",
    "impact_analysis": "Positive",
    "simplified_text": "Any disputes arising from this agreement shall be resolved through arbitration as per the Arbitration and Conciliation Act. The decisions of the arbitrator shall be binding on all parties involved."
  }
];

// Function to count positive and negative impacts
const countImpacts = () => {
  let positiveCount = 0;
  let negativeCount = 0;

  contractData.forEach(item => {
    if (item.impact_analysis.trim().toLowerCase() === 'positive') {
      positiveCount++;
    } else if (item.impact_analysis.trim().toLowerCase() === 'negative') {
      negativeCount++;
    }
  });

  return { positiveCount, negativeCount };
};

const ContractAnalysisTable = () => {
  const { positiveCount, negativeCount } = countImpacts();

  const data = {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        data: [positiveCount, negativeCount],
        backgroundColor: ['#008000', '#e10000'],
        hoverBackgroundColor: ['#007300', '#B20000'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Contract Analysis</h2>
      
      {/* Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-600">Clauses</th>
              <th className="px-4 py-2 border border-gray-600">Simplified Clauses</th>
              <th className="px-4 py-2 border border-gray-600">Impact</th>
            </tr>
          </thead>
          <tbody>
            {contractData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-100"}>
                <td className="px-4 py-2 border border-gray-600">{item.contract_text}</td>
                <td className="px-4 py-2 border border-gray-600">{item.simplified_text}</td>
                <td className="px-4 py-2 border border-gray-600">{item.impact_analysis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart */}
      <div className="mb-8 mt-20">
        <h3 className="text-3xl font-semibold mb-4 mt-10">Impact Analysis Pie Chart</h3>
        <div className='w-[30vw] flex justify-center ml-[30%]'>
        <Pie data={data} />
        </div>
        
      </div>
    </div>
  );
};

export default ContractAnalysisTable;

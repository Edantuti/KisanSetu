import React from 'react';

// Dummy data
const contractData = [
    {
      "contract_text": "The party of the first part agrees to indemnify and hold harmless the party of the second part from any and all claims, liabilities, and damages arising from the engagement under this agreement, including but not limited to acts of negligence, gross negligence, and willful misconduct.",
      "impact_analysis": "Positive - General Positive Sentiment",
      "simplified_text": "Party of the first part agrees to indemnify and hold harmless the party of the second part from any and all claims, liabilities, and damages arising from the engagement under this agreement."
    },
    {
      "contract_text": "Notwithstanding any provision of this agreement, the contractor shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, loss of business, or diminution in value arising from or related to this agreement.",
      "impact_analysis": "Negative - General Negative Sentiment",
      "simplified_text": "Contractors are not liable for any indirect, incidental, consequential, or punitive damages. Contractors will not be liable for loss of profits, loss of business, or diminution in value arising from or related to this agreement."
    },
    {
      "contract_text": "The borrower shall be charged an interest rate of 12% per annum on any outstanding principal balance. The failure to repay the principal and interest on or before the due date will result in the accrual of additional penalties as specified herein.",
      "impact_analysis": "Negative - General Negative Sentiment",
      "simplified_text": "The borrower shall be charged an interest rate of 12% per annum on any outstanding principal balance. Failure to repay the principal and interest on or before the due date will result in the accrual of additional penalties as specified herein."
    },
    {
      "contract_text": "Upon default, the lender reserves the right to accelerate all outstanding payments, including any accrued interest and penalties, and to initiate legal proceedings to recover the same.",
      "impact_analysis": "Negative - General Negative Sentiment",
      "simplified_text": "The lender reserves the right to accelerate all outstanding payments, including any accrued interest and penalties, and to initiate legal proceedings to recover the same."
    },
    {
      "contract_text": "The farmer is entitled to a minimum support price (MSP) for all crops as per the government regulations. Any deviation from the MSP shall be considered null and void, and the contractor shall pay the difference.",
      "impact_analysis": "Negative - General Negative Sentiment",
      "simplified_text": "The farmer is entitled to a minimum support price (MSP) for all crops as per the government regulations. Any deviation from the MSP shall be considered null and void, and the contractor shall pay the difference."
    },
    {
      "contract_text": "Any disputes arising from this agreement shall be resolved through arbitration as per the Arbitration and Conciliation Act, and the decisions of the arbitrator shall be binding on all parties involved.",
      "impact_analysis": "Positive - General Positive Sentiment",
      "simplified_text": "Any disputes arising from this agreement shall be resolved through arbitration as per the Arbitration and Conciliation Act. The decisions of the arbitrator shall be binding on all parties involved."
    }
  ];  

const ContractAnalysisTable = () => {
  return (
    <div className="container mx-auto p-4 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Contract Analysis</h2>
      <div className="overflow-x-auto">
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
    </div>
  );
};

export default ContractAnalysisTable;

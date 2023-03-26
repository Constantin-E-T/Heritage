import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Button } from 'react-bootstrap';

const InvoicePDF = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add the invoice content to the PDF using 'doc' methods
    // Use doc.autoTable() to generate tables from the data

    doc.save('invoice.pdf');
  };

  return (
    <div className="invoice-pdf">
      <h1>Invoice Preview</h1>
      {/* Display the invoice data in a preview format */}
      <Button variant="success" onClick={generatePDF}>
        Download Invoice
      </Button>
    </div>
  );
};

export default InvoicePDF;

import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Button } from "react-bootstrap";

const InvoicePDF = ({
  data,
  onBack,
  companyInfo,
  origin,
  destination,
  weight,
  rate,
  totalAmount,
}) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add the company information
    doc.setFontSize(18);
    doc.text(companyInfo.name, 10, 20);
    doc.setFontSize(12);
    doc.text(companyInfo.addressLine1, 10, 30);
    doc.text(companyInfo.addressLine2, 10, 35);
    doc.text(companyInfo.addressLine3, 10, 40);
    doc.text("Phone: " + companyInfo.phone, 10, 45);

    // Add the invoice information
    doc.text("Invoice No: " + data.invoiceNumber, 150, 20);
    doc.text("Invoice Date: " + data.orderDate, 150, 25);
    doc.text("Due Date: " + data.dueDate, 150, 30);

    // Add the customer information
    doc.text("Bill To:", 10, 60);
    doc.text(data.customerName, 10, 65);
    doc.text(data.customerEmail, 10, 70);

    // Create the table for invoice items
    const invoiceItems = [
      { item: "Origin", value: origin },
      { item: "Destination", value: destination },
      { item: "Weight (kg)", value: weight },
      { item: "Rate (£/kg)", value: rate },
      { item: "Total Amount (£)", value: totalAmount },
    ];

    doc.autoTable({
      startY: 90,
      head: [["Item", "Value"]],
      body: invoiceItems.map((item) => [item.item, item.value]),
      theme: "grid",
    });

    // Save the PDF
    doc.save("invoice.pdf");
  };

  if (!data) {
    return null;
  }

  return (
    <div className="invoice-pdf">
      <Button variant="success" onClick={generatePDF} className="my-4">
        Download Invoice
      </Button>
      <Button variant="secondary" onClick={onBack} className="ml-2 my-4">
        Clear the Form
      </Button>
    </div>
  );
};

export default InvoicePDF;

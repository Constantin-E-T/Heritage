import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import InvoicePDF from './InvoicePDF';
import './InvoiceForm.css';

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [showPDF, setShowPDF] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data and create the invoice object
    setInvoiceData(/* invoice object */);
    setShowPDF(true);
  };

  if (showPDF) {
    return <InvoicePDF data={invoiceData} />;
  }

  return (
    <Container className="invoice-form">
      <h1>Create Invoice</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            {/* Add form fields for the first column */}
          </Col>
          <Col>
            {/* Add form fields for the second column */}
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Generate Invoice
        </Button>
      </Form>
    </Container>
  );
};

export default InvoiceForm;

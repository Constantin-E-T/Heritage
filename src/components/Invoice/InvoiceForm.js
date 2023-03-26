import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import InvoicePDF from './InvoicePDF';
import './InvoiceForm.css';

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [showPDF, setShowPDF] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    invoiceItems: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInvoiceData(formData);
    setShowPDF(true);
  };

  const handleBack = () => {
    setFormData({
      customerName: '',
      customerEmail: '',
      invoiceItems: [],
    });
    setShowPDF(false);
  };

  if (showPDF) {
    return <InvoicePDF data={invoiceData} onBack={handleBack} />;
  }

  return (
    <Container className="invoice-form">
      <h1>Create Invoice</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="customerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="customerEmail">
              <Form.Label>Customer Email</Form.Label>
              <Form.Control
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Add more form fields as needed */}
        <Button variant="primary" type="submit">
          Generate Invoice
        </Button>
      </Form>
    </Container>
  );
};

export default InvoiceForm;

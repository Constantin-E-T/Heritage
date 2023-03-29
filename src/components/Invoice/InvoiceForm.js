import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import InvoicePDF from "./InvoicePDF";
import "./InvoiceForm.css";
import companyInfo from "./companyInfo.json";

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [showPDFButtons, setShowPDFButtons] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    invoiceNumber: "",
    orderDate: "",
    dueDate: "",
    origin: "",
    destination: "",
    weight: "",
    rate: "",
    totalAmount: "",
  });
  // Update the form data when user types in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      
      // If weight or rate input field changes, calculate total amount
      if (name === "weight" || name === "rate") {
        const weight = parseFloat(updatedState.weight) || 0;
        const rate = parseFloat(updatedState.rate) || 0;
        updatedState.totalAmount = (weight * rate).toFixed(2);
      }

      return updatedState;
    });
  };
  // When user submits the form, set invoice data and show PDF buttons
  const handleSubmit = (event) => {
    event.preventDefault();
    setInvoiceData(formData);
    setShowPDFButtons(true);
  };
  // When user clicks "back" button, reset the form and hide PDF buttons
  const handleBack = () => {
    setFormData({
      customerName: "",
      customerEmail: "",
      invoiceNumber: "",
      orderDate: "",
      dueDate: "",
      origin: "",
      destination: "",
      weight: "",
      rate: "",
      totalAmount: "",
    });
    setShowPDFButtons(false);
  };

  return (
    <Container className="invoice-form my-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="customerName">
              <Form.Label className="left-align-label">
                Customer Name
              </Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="customerEmail">
              <Form.Label className="left-align-label">
                Customer Email
              </Form.Label>
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
        <Row>
          <Col xs={12} md={4}>
            <Form.Group controlId="invoiceNumber">
              <Form.Label className="left-align-label">
                Invoice Number
              </Form.Label>
              <Form.Control
                type="text"
                name="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="orderDate">
              <Form.Label className="left-align-label">Order Date</Form.Label>
              <Form.Control
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="dueDate">
              <Form.Label className="left-align-label">Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="origin">
              <Form.Label className="left-align-label">Origin</Form.Label>
              <Form.Control
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="destination">
              <Form.Label className="left-align-label">Destination</Form.Label>
              <Form.Control
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="weight">
              <Form.Label className="left-align-label">Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="rate">
              <Form.Label className="left-align-label">Rate (£/kg)</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="totalAmount">
              <Form.Label className="left-align-label">
                Total Amount (£)
              </Form.Label>
              <Form.Control
                type="number"
                name="totalAmount"
                value={formData.totalAmount}
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>

        {!showPDFButtons && (
          <Button variant="primary" type="submit" className="my-4 btn-block">
            Generate Invoice
          </Button>
        )}
      </Form>
      {showPDFButtons && (
        <InvoicePDF
          data={invoiceData}
          onBack={handleBack}
          companyInfo={companyInfo}
          origin={formData.origin}
          destination={formData.destination}
          weight={formData.weight}
          rate={formData.rate}
          totalAmount={formData.totalAmount}
        />
      )}
    </Container>
  );
};

export default InvoiceForm;
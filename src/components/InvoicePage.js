import React, { Component } from 'react';
import InvoiceForm from './Invoice/InvoiceForm';

class InvoicePage extends Component {
  render() {
    return (
      <div>
        <InvoiceForm />
        <a class="btn btn-primary" href="/services" role="button">Cancel</a>
      </div>
    );
  }
}

export default InvoicePage;
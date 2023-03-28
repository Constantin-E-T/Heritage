import React, { Component } from 'react';
import InvoiceForm from './Invoice/InvoiceForm';

class InvoicePage extends Component {
  render() {
    return (
      <div>
        
        <InvoiceForm />
        <a class="btn btn-primary row justify-content-center" href="/services" role="button">Return</a>
        
      </div>
    );
  }
}

export default InvoicePage;
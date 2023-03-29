import React, { Component } from 'react';
import InvoiceForm from './Invoice/InvoiceForm';
import { Helmet } from 'react-helmet';


class InvoicePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Heritage Haulage - Invoice</title>
        </Helmet>
        <InvoiceForm />
      </div>
    );
  }
}

export default InvoicePage;
import React, { Component } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Contact.css';
import emailjs from 'emailjs-com';
import companyInfo from './Invoice/companyInfo.json';
import { Modal, Button } from 'react-bootstrap';
// Replace these with your own EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_qapgq78';
const EMAILJS_TEMPLATE_ID = 'template_syf9yth';
const EMAILJS_USER_ID = 'jI_8xJyWpLBhogO__';
mapboxgl.accessToken =
  'pk.eyJ1IjoibW94eS0iLCJhIjoiY2xmbGZ5M2kzMDFsdDN3bGwwazZkZDl1MyJ9.5Ub-_HIlHEOo5kaHtkrJjA';
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -1.1013463074087266,
      lat: 50.80151276175477,
      zoom: 16,
      showModal: false,
      modalTitle: '',
      modalBody: '',
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const { address } = companyInfo;
    const { latitude, longitude } = address;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.textContent = 'H';
    new mapboxgl.Marker(markerElement)
      .setLngLat([longitude, latitude])
      .addTo(map);
  }
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleOpenModal = (title, body) => {
    this.setState({ showModal: true, modalTitle: title, modalBody: body });
  };
  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_USER_ID
      )
      .then(
        (result) => {
          this.handleOpenModal('Email Sent', 'Email sent successfully!');
        },
        (error) => {
          this.handleOpenModal(
            'Error',
            'Failed to send email. Please try again later.'
          );
        }
      );
    e.target.reset();
  };
  render() {
    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='left-aligned-label'>Contact Us</h3>
            <form onSubmit={this.sendEmail}>
              <div className='form-group'>
                <label htmlFor='from_name' className='left-aligned-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='from_name'
                  name='from_name'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email' className='left-aligned-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message' className='left-aligned-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  rows='3'
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <div className='form-group'>
                <label htmlFor='company_name' className='left-aligned-label'>
                  Company Name (optional)
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='company_name'
                  name='company_name'
                  placeholder='Company Name'
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary left-aligned-label my-4 btn-block text-center'
              >
                Submit
              </button>
            </form>
          </div>
          <div className='col-md-6'>
            <div ref={this.mapContainer} className='map-container' />
          </div>
        </div>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          centered
        >
          <Modal.Header closeButton className='modal-header'>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.modalBody}</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
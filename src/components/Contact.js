import React, {Component} from 'react';
import './Contact.css';
import locationStatic from '../assets/images/locationStatic.jpg';
 

export default class Contact extends Component {
  render() {
    return (
      <div class='contact-container row'>
        <img  class='col-md-7'
              style={{height:'400px', width:'800px', paddingRight:'50px'}}
              alt='Heritage Haulage Static Map Location'
              src={locationStatic}/>
          <form class='contact col-lg-5' name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required/>
              </div>
              <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" class="form-control" id="subject" name="subject" required/>
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control" rows="5" id="message" name="message" required></textarea>
              </div>
              <div class="form-group">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <button type="submit" class="btn btn-outline-warning">Submit</button>
          </form>
        </div>
    );
  }
}
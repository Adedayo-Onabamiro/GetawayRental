import React, { useState } from 'react';
import '../Modal/Modal.css';
import { CarDataLocal } from '../../../Data/CarDataLocal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faInfoCircle, faLocationDot, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ carType, pickupLocation, dropoffLocation, pickupDate, dropoffDate, closeModal }) => {
  const selectedCar = CarDataLocal.find((car) => car.name === carType);
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    email: '',
    address: '',
    city: '',
    zipcode: '',
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleInputChange = (e) => {
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  };

  const handleReserveNow = () => {
    const {
      firstName,
      lastName,
      phoneNumber,
      age,
      email,
      address,
      city,
      zipcode,
    } = formFields;

    // Check if all personal form fields are filled
    if (
      firstName &&
      lastName &&
      phoneNumber &&
      age &&
      email &&
      address &&
      city &&
      zipcode
    ) {
      // Show success message
      setAlertMessage('Reservation complete! Check your email for confirmation.');
      setAlertType('success');

      // Reset form fields
      setFormFields({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        age: '',
        email: '',
        address: '',
        city: '',
        zipcode: '',
      });

      // Close the modal after a short delay for the alert to disappear
      setTimeout(() => {
        closeModal();
        setAlertMessage('');
        setAlertType('');
      }, 5000);
    } else {
      // Show error message
      setAlertMessage('Please fill in all personal form fields.');
      setAlertType('error');
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="row header">
          {alertMessage && (
            <div
              className={`alert ${alertType === 'success' ? 'success' : 'error'}`}
            >
              {alertMessage}
            </div>
          )}
            <div className="title">
              <h1>Complete Reservation</h1>
              <FontAwesomeIcon
                onClick={closeModal}
                className="icon"
                icon={faTimes}
              />
            </div>
            <div className="message">
              <h4>
                <FontAwesomeIcon icon={faInfoCircle} /> Upon completing this
                reservation enquiry, you will receive:
              </h4>
              <p>
                Your rental voucher to produce on arrival at the rental desk
                and a toll-free customer support number.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="rcleft">
              <h3>Location & Date</h3>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Pick-up Location: {pickupLocation}</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Drop-off Location: {dropoffLocation}</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Pick-up Date: {pickupDate && pickupDate.toString()}</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Drop-off Date: {dropoffDate && dropoffDate.toString()}</span>
              </p>
            </div>
            <div className="rcright">
              <h3>Car: {selectedCar.name}</h3>
              <img src={selectedCar.img} alt={selectedCar.name} />
            </div>
          </div>
          <div className="row personalForm">
            <div className="personalform-container">
              <h3>Personal Form</h3>
              <form>
                <div className="personalform-row">
                  <div className="personalform-item">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formFields.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="personalform-item">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formFields.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="personalform-row">
                  <div className="personalform-item">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      value={formFields.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="personalform-item">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="text"
                      id="age"
                      value={formFields.age}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="personalform-row">
                  <div className="personalform-item full-width">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={formFields.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="personalform-row">
                  <div className="personalform-item full-width">
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      id="address"
                      value={formFields.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="personalform-row">
                  <div className="personalform-item">
                    <label htmlFor="city">City:</label>
                    <input
                      type="text"
                      id="city"
                      value={formFields.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="personalform-item">
                    <label htmlFor="zipcode">Zip Code:</label>
                    <input
                      type="text"
                      id="zipcode"
                      value={formFields.zipcode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="checkbox">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">
                    Send me latest news and updates
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="row bottom">
            <button onClick={handleReserveNow}>Reserve Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

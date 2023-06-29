import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from './Modal/Modal';
import { faUser, faCalendarAlt, faLocationDot, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CarDataLocal } from '../../Data/CarDataLocal';

const Form = () => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB');
  };

  
    const [carType, setCarType] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [pickupDate, setPickupDate] = useState(null);
    const [dropoffDate, setDropoffDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showIncompleteFormMessage, setShowIncompleteFormMessage] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Check if all form fields are filled
      if (carType && pickupLocation && dropoffLocation && pickupDate && dropoffDate) {
        // Open the modal
        setIsModalOpen(true);
        setShowIncompleteFormMessage(false);
      } else {
        // Show incomplete form message
        setShowIncompleteFormMessage(true);
      }
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Book a car</h3>
      {showIncompleteFormMessage && <div className="form-message">Please fill up the form first.</div>}
      <div className="formContent">
        <div className="form-item">
          <div className="icon-label">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span className="label">Select Your Car Type</span>
          </div>
          <select className="dropdown" value={carType} onChange={(e) => setCarType(e.target.value)}>
               <option value="">Select Option</option>
              {CarDataLocal.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-item">
          <div className="icon-label">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <span className="label">Pick-up</span>
          </div>
          <select className="dropdown" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="New York">New York</option>
            <option value="Accra">Accra</option>
            <option value="London">London</option>
          </select>
        </div>
        <div className="form-item">
          <div className="icon-label">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <span className="label">Drop-off</span>
          </div>
          <select className="dropdown" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="New York">New York</option>
            <option value="Accra">Accra</option>
            <option value="London">London</option>
          </select>
        </div>
        <div className="form-item">
          <div className="icon-label">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <span className="label">Pick Up</span>
          </div>
          <div className="date-picker-wrapper">
            <DatePicker
              className="date-picker"
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              dateFormat="dd/MM/yy" // Set the desired date format
            />
          </div>
        </div>
        <div className="form-item">
          <div className="icon-label">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <span className="label">Drop off</span>
          </div>
          <div className="date-picker-wrapper">
            <DatePicker
              className="date-picker"
              selected={dropoffDate}
              onChange={(date) => setDropoffDate(date)}
              dateFormat="dd/MM/yy" // Set the desired date format
            />
          </div>
        </div>
        <div className="form-item">
          <div className="icon-label">
            <FontAwesomeIcon icon={faArrowDown} className="icon" />
            <span className="label"></span>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </div>

        {isModalOpen && (
        <Modal
          carType={carType}
          pickupLocation={pickupLocation}
          dropoffLocation={dropoffLocation}
          pickupDate={formatDate(pickupDate)}
          dropoffDate={formatDate(dropoffDate)}
          closeModal={closeModal}
        />
      )}

      </div>
    </form>
    </>
  );
};

export default Form;

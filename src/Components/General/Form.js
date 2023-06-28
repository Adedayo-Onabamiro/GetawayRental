import "../../index.css";
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faLocationDot, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
    const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    
    <form onSubmit={handleSubmit} className="form-container">
        <h3>Book a car</h3>
        <div className="formContent">
            <div className="form-item">
                <div className="icon-label">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <span className="label">Select Your Car Type</span>
                </div>
                <select className="dropdown">
                <option value="">Select Option</option>
                <option value="option1">Audi A1 S-Line</option>
                <option value="option2">VW Golf 6</option>
                <option value="option3">Toyota Camry</option>
                <option value="option4">BMW 320 ModernLine</option>
                <option value="option5">Mercedes-Benz GLK</option>
                <option value="option6">VW Passat CC</option>
                </select>
            </div>
            <div className="form-item">
                <div className="icon-label">
                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    <span className="label">Pick-up</span>
                </div>
                <select className="dropdown">
                <option value="">Select Option</option>
                <option value="option1">Lagos</option>
                <option value="option2">Abuja</option>
                <option value="option3">New York</option>
                <option value="option4">Accra</option>
                <option value="option5">London</option>
                </select>
            </div>
            <div className="form-item">
                <div className="icon-label">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <span className="label">Drop-off </span>
                </div>
                <select className="dropdown">
                <option value="">Select Option</option>
                <option value="option1">Lagos</option>
                <option value="option2">Abuja</option>
                <option value="option3">New York</option>
                <option value="option4">Accra</option>
                <option value="option5">London</option>
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
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
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
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
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
        </div>
    </form>
  );
};

export default Form;


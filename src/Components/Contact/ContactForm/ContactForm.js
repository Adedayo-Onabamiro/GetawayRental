import React, { useState } from 'react';
import"../ContactForm/ContactForm.css"

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [question, setQuestion] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isQuestionValid, setIsQuestionValid] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(value !== '');
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    setIsAddressValid(value !== '');
  };

  const handleQuestionChange = (e) => {
    const value = e.target.value;
    setQuestion(value);
    setIsQuestionValid(value !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNameValid && isAddressValid && isQuestionValid) {
      // Perform form submission logic here
      console.log('Form submitted');
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <form className='ContactFormForm' onSubmit={handleSubmit}>
      <div className='CFField'>
        <label htmlFor="name">Name:</label>
        {!isNameValid && <span style={{ color: 'red' }}>*</span>}
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className='CFField'>
        <label htmlFor="address">Address:</label>
        {!isAddressValid && <span style={{ color: 'red' }}>*</span>}
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>

      <div className='CFField'>
        <label htmlFor="question">Question:</label>
        {!isQuestionValid && <span style={{ color: 'red' }}>*</span>}
        <textarea
          id="question"
          value={question}
          onChange={handleQuestionChange}
          required
        />
      </div>
      <button className='CFBtn' type="submit">Submit</button>
    </form>
  );
};


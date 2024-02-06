import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    checkbox: false,
    radio: '',
    dropdown: '',
    date: '',
    number: '',
    color: '#000000'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="fName"
          placeholder='Enter your First name'
          value={formData.fName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lName"
          placeholder='Enter your Last name'
          value={formData.lName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='Enter your Email address'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder='Enter your Password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          Agree Terms and Conditions:
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <input
            type="radio"
            name="radio"
            value="male"
            checked={formData.radio === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="female"
            checked={formData.radio === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <div>
        <label>City</label>
        <select
          name="dropdown"
          value={formData.dropdown}
          onChange={handleChange}
        >
          <option value="">Select your City</option>
          <option value="option1">Karachi</option>
          <option value="option2">Islamabad</option>
          <option value="option3">Lahore</option>
          <option value="option4">Multan</option>
        </select>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="number"
          placeholder='Enter your Age'
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Color:</label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;




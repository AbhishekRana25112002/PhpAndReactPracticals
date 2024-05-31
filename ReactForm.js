import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState , Component} from 'react';

function UserInputForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    alert(`Name: ${name}, Email: ${email}`);
    // You can perform other actions with the form data here, like sending it to a server
    setName('');
    setEmail('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChange} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserInputForm/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

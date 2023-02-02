import React, { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({ show: false, name: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  console.log(formData);

  const handleBlur = (event) => {

    if (!event.target.value) {
      setError({ show: true, name: event.target.name, message: `${event.target.name} is required` })
    } else if (event.target.name == "email" && !validEmail.test(event.target.value)) {
      setError({ show: true, name: event.target.name, message: `this is not an email!` })
    }
  }

  const handleChange = (event) => {
    // [] makes it a key
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <h2>Contact</h2>
      {/* {error && <h1>GIANT ERROR</h1>} */}
      {/* {error && <h1>{errorMessage}</h1>} */}
      <form className="form login-form">
        <div>
          <label>name:</label>
          <input className="form-input" type="text" name="name" onChange={handleChange} onBlur={handleBlur} required />
          {error.show && error.name == "name" && <h1>{error.message}</h1>}
        </div>
        <div>
          <label>email:</label>
          <input className="form-input" type="email" name="email" onChange={handleChange} onBlur={handleBlur} required />
          {error.show && error.name == "email" && <h1>{error.message}</h1>}
        </div>
        <div>
          <label>message:</label>
          <textarea className="form-input" type="text" name="message" onChange={handleChange} onBlur={handleBlur} required />
          {error.show && error.name == "message" && <h1>{error.message}</h1>}
        </div>
        <div>
          <button className="btn btn-primary" type="submit">submit</button>
        </div>
      </form>

    </div>
  )
}

export default Contact
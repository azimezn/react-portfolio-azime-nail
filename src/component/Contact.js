import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>

      <form class="form login-form">
        <div>
          <label>name:</label>
          <input class="form-input" type="text" id="name-contact" />
        </div>
        <div>
          <label>email:</label>
          <input class="form-input" type="email" id="email-contact" />
        </div>
        <div>
          <label>message:</label>
          <textarea class="form-input" type="text" id="message-contact" />
        </div>
        <div>
          <button class="btn btn-primary" type="submit">login</button>
        </div>
      </form>

    </div>
  )
}

export default Contact
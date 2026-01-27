import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    department: ''
  });

const handleChange=(e)=>{
  const {name,value} = e.target
  setForm((prev)=>({
    ...prev,
    [name]:value
  }))
};

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div>
          <label>Name: </label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label><br />
          <textarea
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department: </label><br />
          <textarea
            name="department"
            value={form.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
    </div>

  )
}


export default Contact
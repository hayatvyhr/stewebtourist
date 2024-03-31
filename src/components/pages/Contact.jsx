import React, { useState } from "react";
import "./contact.css";
export const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can send this data to your server or handle it accordingly
    // Reset form after submission
    setFormData({
      email: "",
      message: "",
      name: ""
    });
  };

  return (
    <div>
      <div class="p">
<div class="d1">       
<h2 className="mt-5 mb-4" style={{ color: "#000742", textAlign: "center", fontSize: "3rem", fontWeight: "800", fontFamily: "Arial, sans-serif" }}>Get in Touch - Contact Us</h2>
 </div>
<div class="d2">
  <img src="src/img/diagramme de classe.png" alt="99" /> </div>
<div class="d3">
<div className="container" style={{ background: "#000742", width: "500px", height: "470px", border: "2px solid #2bf1c4", borderRadius: "10px", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend style={{ color: "#2bf1c4"}}> Contact US</legend>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-white">Message</label>
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#2bf1c4" }}>Submit</button>
          </div>
          </fieldset>
        </form>
      </div> </div>
</div>
     
    </div>
  );
};

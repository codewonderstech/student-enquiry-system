import React, { useState } from "react";
import { validateForm } from "../utils/validators";
import "./EnquiryForm.css";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    college: "",
    education: "",
    year: "",
    enquiryType: "",
    domain: "",
    query: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form Submitted Successfully");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <h1 className="title">CodeWonders</h1>
        <p className="subtitle">Enquiry Form</p>

        <div className="step">
          <h2>Personal Info</h2>

          <div className="floating icon">
            <span>👤</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Name</label>
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="floating icon">
            <span>📧</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Email</label>
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="floating icon">
            <span>📱</span>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Phone</label>
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <div className="floating icon">
            <span>👤</span>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option value=""></option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <label>Gender</label>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

          <div className="floating icon">
            <span>🏫</span>
            <input
              type="text"
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder=" "
            />
            <label>College Name</label>
          </div>
          {errors.college && <p className="error">{errors.college}</p>}

          <div className="floating">
            <select
              name="education"
              value={form.education}
              onChange={handleChange}
            >
              <option value=""></option>
              <option>BCA</option>
              <option>B.Tech</option>
              <option>BBA</option>
              <option>BCS</option>
              <option>M.Tech</option>
              <option>ME</option>
            </select>
            <label>Education</label>
          </div>
          {errors.education && <p className="error">{errors.education}</p>}

          <div className="floating">
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
            >
              <option value=""></option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <label>Pass-out Year</label>
          </div>
          {errors.year && <p className="error">{errors.year}</p>}

          <div className="floating">
            <select
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
            >
              <option value=""></option>
              <option>Internship</option>
              <option>Course</option>
            </select>
            <label>Enquiry Type</label>
          </div>
          {errors.enquiryType && (
            <p className="error">{errors.enquiryType}</p>
          )}

          <div className="floating icon">
            <span>💻</span>
            <input
              type="text"
              name="domain"
              value={form.domain}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Domain / Skill</label>
          </div>
          {errors.domain && <p className="error">{errors.domain}</p>}

          <div className="floating icon">
            <span>📝</span>
            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              placeholder=" "
            ></textarea>
            <label>Your Query</label>
          </div>

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms";
    }

    if (Object.keys(errors).length === 0) {
      // No errors and data is submitted
      setSubmitted(true);
      console.log("Form submitted:", formData);

      setFormData({
        name: "",
        email: "",
        message: "",
        agreeToTerms: false,
      });

      toast.success('Message sent!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",      
        });

    } else {
      setErrors(errors);
      toast.error('Something went wrong!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",      
        });
    }
  };

  return (
    <Typography>
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={Boolean(errors.message)}
          helperText={errors.message}
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.agreeToTerms}
              onChange={handleChange}
              name="agreeToTerms"
              color="primary"
            />
          }
          label="I agree to the terms"
          sx={{ mb: 2 }}
        />
        {errors.agreeToTerms && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            {errors.agreeToTerms}
          </div>
        )}
        <Box></Box>

        <Box  textAlign='center'>
        <Button type="submit" variant="contained" color="primary" fullWidth size="large">
          Submit
        </Button>
        </Box>        
      </form>      
    </Box>

    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"       
        />
    </Typography>
  );
}

export default Contact;

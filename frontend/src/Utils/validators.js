export const validateForm = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!data.email.includes("@")) {
    errors.email = "Enter valid email";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(data.phone)) {
    errors.phone = "Phone must be exactly 10 digits";
  }

  if (!data.gender) {
    errors.gender = "Gender is required";
  }

  if (!data.college.trim()) {
    errors.college = "College name is required";
  }

  if (!data.education) {
    errors.education = "Education is required";
  }

  if (!data.year) {
    errors.year = "Pass-out year is required";
  }

  if (!data.enquiryType) {
    errors.enquiryType = "Enquiry type is required";
  }

  if (!data.domain.trim()) {
    errors.domain = "Domain is required";
  }

  return errors;
};
export function cleanFormValue(name, value) {
  return value;
}

export function validateField(name, value) {
  const nameRegex = /^[A-Za-z\s'-]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const addressRegex = /^[A-Za-z0-9\s,.'#-]+$/;

  switch (name) {
    case "firstName":
      if (!value.trim()) return "First name is required.";
      if (!nameRegex.test(value))
        return "First name should contain letters only.";
      return "";

    case "lastName":
      if (!value.trim()) return "Last name is required.";
      if (!nameRegex.test(value))
        return "Last name should contain letters only.";
      return "";

    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!emailRegex.test(value)) return "Please enter a valid email address.";
      return "";

    case "phone":
      if (!value.trim()) {
        return "Phone number is required.";
      }

      if (/[^0-9]/.test(value)) {
        return "Phone number can contain digits only.";
      }

      if (!/^[0-9]{10,15}$/.test(value)) {
        return "Phone number should contain 10 to 15 digits.";
      }

      return "";
      
    case "propertyType":
      if (!value) return "Please select a property type.";
      return "";

    case "address":
      if (value && !addressRegex.test(value))
        return "Address contains invalid characters.";
      return "";

    case "serviceType":
      if (!value) return "Please select a service.";
      return "";

    case "projectDetails":
      if (!value.trim()) return "Project details are required.";
      return "";

    case "contactMethod":
      if (!value) return "Please select a preferred contact method.";
      return "";

    default:
      return "";
  }
}

export function validateFreeQuoteForm(formData) {
  const errors = {};

  Object.keys(formData).forEach((fieldName) => {
    const error = validateField(fieldName, formData[fieldName]);

    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
}

export const checkIfFormIsValid = (formInputs: {
  name: string;
  email: string;
  message: string;
}) => {
  let formIsValid = true;
  const formErrors = {
    name: "",
    email: "",
    message: "",
  };

  Object.keys(formInputs).forEach((key) => {
    const currentInput = formInputs[key as keyof typeof formInputs];

    switch (key) {
      case "name":
      case "message":
        if (!checkIfStringIsValid(currentInput, key === "name" ? 56 : 500)) {
          formErrors[key as keyof typeof formErrors] =
            "This field is required and less than 56 characters";
          formIsValid = false;
        }
        break;
      case "email":
        if (!checkifEmailIsValid(currentInput)) {
          formErrors[key as keyof typeof formErrors] = "The email is not valid";
          formIsValid = false;
        }
        break;
      default:
        break;
    }
  });

  return { formIsValid, formErrors };
};

const checkifEmailIsValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const checkIfStringIsValid = (string: string, limit: number = 500) => {
  return string.trim().length > 0 && string.trim().length < limit;
};

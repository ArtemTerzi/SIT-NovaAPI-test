const regex = /^\d{14}$/;

export const ttnValidation = (value) => {
  const isValid = regex.test(value);
  return isValid;
};

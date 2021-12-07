export const passwordRegex = (password) => {
  let regexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,20}$";
  return regexPassword.match(password);
};

export const emailRegex = (email) => {
  let regexEmail = "^(.+)@(.+)$";
  return regexEmail.match(email);
};

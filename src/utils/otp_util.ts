// random otp 6 digits
export const randomOtp = (): number => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
};

export const otpToString = (otp: number): string => {
  const otpString = otp.toString();
  //  add space after every 3 digits
  const otpStringWithSpace = otpString.replace(/(\d{3})/g, "$1 ");
  return otpStringWithSpace.trim();
};

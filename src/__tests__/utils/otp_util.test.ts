import { otpToString, randomOtp } from "../../utils/otp_util";
import { describe, it } from "vitest";

describe("OTP utils", () => {
  it("should render 6 digits", () => {
    const otp = randomOtp().toString().length;
    expect(otp).toBe(6);
  });

  it("should have correct length when add space to otp", () => {
    const otp1 = otpToString(123123).length;
    const otp2 = otpToString(123123123).length;
    const otp3 = otpToString(12312312).length;
    expect(otp1).toBe(7);
    expect(otp2).toBe(11);
    expect(otp3).toBe(10);
  });
});

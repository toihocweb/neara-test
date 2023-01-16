import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DEFAULT_TIME } from "../../constants/time";
import { useStore } from "../../hooks/useStore";
import { randomOtp } from "../../utils/otp_util";

const NewToken = () => {
  // tokenRef
  const { serviceStore } = useStore().rootStore;
  const tokenRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const addNewToken = () => {
    let token = tokenRef.current;
    if (!token?.value) return;
    serviceStore.addService({
      name: token.value,
      logo: "https://picsum.photos/200",
      otp: randomOtp(),
      time: DEFAULT_TIME,
    });
    navigate("/");
    token.value = "";
  };
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl mb-5">Add new token</h2>

      {/* input add new token */}
      <input
        type="text"
        className="border-2 border-gray-300 p-2 w-full rounded-md mb-3"
        placeholder="Enter token name"
        ref={tokenRef}
      />
      {/* button add with color primary */}
      <button
        className="bg-orange-500 text-white px-3 py-2 rounded-md w-20"
        onClick={addNewToken}
      >
        Add
      </button>
    </div>
  );
};

export default NewToken;

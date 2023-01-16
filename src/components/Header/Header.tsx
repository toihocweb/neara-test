import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="Header shadow-sm">
      <div className="container bg-white flex justify-between items-center py-9  mx-auto">
        <h2 className="text-3xl">Neara 2FA</h2>
        <div>
          <Link className="text-orange-500 text-xl mr-3" to={"/"}>
            Tokens
          </Link>
          <Link to={"/setting"} className="text-xl">
            Setting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

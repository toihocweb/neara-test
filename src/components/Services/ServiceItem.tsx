import { useEffect, useState } from "react";
import { DEFAULT_TIME } from "../../constants/time";
import { IService } from "../../store/ServiceStore";
import { otpToString } from "../../utils/otp_util";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import { observer } from "mobx-react-lite";

interface IProps {
  service: IService;
}

const ServiceItem = ({ service }: IProps) => {
  const [percentage, setPercentage] = useState(100);

  const [duration, setDuration] = useState(service.time);
  const { name, logo, otp } = service;

  useEffect(() => {
    setDuration(service.time);
  }, [service.time]);

  useEffect(() => {
    setPercentage((duration / DEFAULT_TIME) * 100);
  }, [duration]);

  return (
    <div className="flex items-center p-8 shadow-md">
      <div className=" flex items-center justify-center w-20 h-20">
        <img className="max-w-full" src={logo} alt="" />
      </div>
      <div className="ml-3">
        <h3 className="text-2xl">{name}</h3>
        <span className="text-3xl">{otpToString(otp)}</span>
      </div>
      <div className="ml-auto">
        <CircularProgressBar
          percentage={percentage}
          text={duration.toString()}
        />
      </div>
    </div>
  );
};

export default observer(ServiceItem);

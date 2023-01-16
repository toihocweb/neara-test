import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStore } from "../../hooks/useStore";
import { IService } from "../../store/ServiceStore";
import ServiceActions from "./ServiceActions";
import ServiceItem from "./ServiceItem";

const ServiceList: React.FC = () => {
  const { serviceStore } = useStore().rootStore;

  useEffect(() => {
    serviceStore.countDown();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <ServiceActions />
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {serviceStore.serviceListValue.map((service: IService) => (
          <ServiceItem key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
};

export default observer(ServiceList);

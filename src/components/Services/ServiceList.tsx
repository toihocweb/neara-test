import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import { useStore } from "../../hooks/useStore";
import { IService } from "../../store/ServiceStore";
import ServiceActions from "./ServiceActions";
import ServiceItem from "./ServiceItem";

const ServiceList: React.FC = () => {
  const { serviceStore } = useStore().rootStore;
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  useEffect(() => {
    serviceStore.countDown();
  }, []);

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListServices = [...serviceStore.serviceListValue];
    const dragIdx = dragItem.current as any as number;
    const dragOverIdx = dragOverItem.current as any as number;
    const dragItemContent = copyListServices[dragIdx];
    copyListServices.splice(dragIdx, 1);
    copyListServices.splice(dragOverIdx, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    serviceStore.updateServiceList(copyListServices);
  };

  return (
    <div className="container mx-auto mt-5">
      <ServiceActions />
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {serviceStore.serviceListValue.map(
          (service: IService, index: number) => (
            <div
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              key={service.name}
            >
              <ServiceItem service={service} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default observer(ServiceList);

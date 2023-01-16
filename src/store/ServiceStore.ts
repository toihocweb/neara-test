import { action, computed, makeAutoObservable, observable } from "mobx";
import { DEFAULT_TIME } from "../constants/time";
import { randomOtp } from "../utils/otp_util";
import { IRootStore } from "./RootStore";

export interface IService {
  name: string;
  logo: string;
  otp: number;
  time: number;
}

const initialServices: IService[] = [
  {
    name: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU",
    otp: randomOtp(),
    time: DEFAULT_TIME,
  },
  {
    name: "Binance",
    logo: "https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Cryptocurrency-Binance-Logo-Graphics-13393898-1.jpg",
    otp: randomOtp(),
    time: DEFAULT_TIME,
  },
  {
    name: "Epic Games",
    logo: "https://cdn2.unrealengine.com/Epic+Games+Node%2FepicLogo_1920x1080-1920x1080-401b77ef30fa9e5aaadbdd99ad2ff27ceda27a6f.png",
    otp: randomOtp(),
    time: DEFAULT_TIME,
  },
  {
    name: "Coinbase",
    logo: "https://pbs.twimg.com/profile_images/1484586799921909764/A9yYenz3_400x400.png",
    otp: randomOtp(),
    time: DEFAULT_TIME,
  },
];

export class ServiceStore {
  serviceList: IService[] = initialServices;
  intervalId: number | null = null;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this, {
      serviceList: observable,
      addService: action,
      resetOtp: action,
      serviceListValue: computed,
      countDown: action,
    });
    this.rootStore = rootStore;
  }

  get serviceListValue() {
    return this.serviceList;
  }

  set serviceListValue(value: IService[]) {
    this.serviceList = value;
  }

  countDown() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.serviceListValue = this.serviceList.map((service) => {
        if (service.time === 0) {
          this.resetOtp(service.name);
          return { ...service, time: DEFAULT_TIME };
        }
        return { ...service, time: service.time - 1 };
      });
    }, 1000);
  }

  addService(service: IService) {
    // check if exist
    const exist = this.serviceList.find((s) => s.name === service.name);
    if (exist) {
      return;
    }
    this.serviceList.push(service);
  }

  resetOtp(name: string) {
    const service = this.serviceList.find((service) => service.name === name);
    if (service) {
      service.otp = randomOtp();
    }
  }

  updateServiceTime(name: string, time: number) {
    const service = this.serviceList.find((service) => service.name === name);
    if (service) {
      service.time = time;
    }
  }
}

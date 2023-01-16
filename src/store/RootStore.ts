import { ServiceStore } from "./ServiceStore";

export interface IRootStore {
  serviceStore: ServiceStore;
}

export class RootStore implements IRootStore {
  serviceStore: ServiceStore;

  constructor() {
    this.serviceStore = new ServiceStore(this);
  }
}

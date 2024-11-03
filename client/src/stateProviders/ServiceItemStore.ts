import { create } from "zustand";

interface ServiceItemStore {
    serviceName: string | null;
    serviceID: string | null;
    serviceItemID: string | null;
    setServiceName: (name: string | null) => void;
    setServiceID: (id: string | null) => void;
    setServiceItemID: (itemID: string | null) => void;
}

export const useServiceItemStore = create<ServiceItemStore>((set) => ({
    serviceName: null,
    serviceID: null,
    serviceItemID: null,
    setServiceName: (name) => set({ serviceName: name }),
    setServiceID: (id) => set({ serviceID: id }),
    setServiceItemID: (itemID) => set({ serviceItemID: itemID })
}))
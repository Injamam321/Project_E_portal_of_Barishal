import { create } from 'zustand';

interface ServiceStore {
    serviceName: string | null;
    serviceImage: string | undefined;
    serviceDescription: string | null;
    setServiceName: (name: string | null) => void;
    setServiceImage: (image: string | undefined) => void;
    setServiceDescription: (description: string | null) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
    serviceName: null,
    serviceImage: undefined,
    serviceDescription: null,
    setServiceName: (name) => set({ serviceName: name }),
    setServiceImage: (image) => set({ serviceImage: image }),
    setServiceDescription: (description) => set({ serviceDescription: description })
}));
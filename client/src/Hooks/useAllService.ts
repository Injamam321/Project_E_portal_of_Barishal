import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClint from "../services/api-client";

export interface FetchAllServiceResponse {
    _id: string;
    name: string;
    description: string;
    slug?: string;
    image: string;
}

const useAllService = () => {
    const [service, setService] = useState<FetchAllServiceResponse[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);

        apiClint
            .get<FetchAllServiceResponse[]>('/allservice', { signal: controller.signal })
            .then(res => {
                setService(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { service, error, isLoading };
};

export default useAllService;

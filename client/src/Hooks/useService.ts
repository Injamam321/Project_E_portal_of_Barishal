import { useEffect, useState } from "react"
import apiClint from "../services/api-client"
import { CanceledError } from "axios";


export interface Service {
    _id: string;
    name: string;
    type: string;
    address: string | null;
    image: string | null;
    branch: string | null;
    phone: string | null;
    founded: string | null;
    campus: string | null;
    students: string | null;
    contact: string | null;
    location: string | null;
    description: string | null;
    destinations: string | null;
    email: string | null;
    website: string | null;
}

export interface FetchServicelistResponse {
    _id: string;
    name: string;
    type: string;
    description: string;
    slug: string;
    image: string;
    result: Service[];
}

const useService = (slug: string) => {
    const [serviceList, setServiceList] = useState<FetchServicelistResponse[]>([])
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);



    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClint
            .get<FetchServicelistResponse[]>(`/${slug}`)
            .then(res => {
                setServiceList(res.data)
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
        return () => controller.abort();
    }, [])
    return { serviceList, error, isLoading }
}

export default useService;

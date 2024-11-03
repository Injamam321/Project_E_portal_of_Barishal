import { useEffect, useState } from 'react';
import { Service } from './useService';
import apiClient from '../services/api-client';

const useServiceItems = (mainServiceSlug: string, mainServiceID: string, itemID: string) => {
    const [serviceItem, setServiceItem] = useState<Service | null>(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        apiClient
            .get(`/${mainServiceSlug}/${mainServiceID}/service/${itemID}`)
            .then(res => {
                setServiceItem(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [mainServiceSlug, mainServiceID, itemID]);

    const createServiceItem = async (newItem: Partial<any>) => {
        try {
            const response = await apiClient.post(`/${mainServiceSlug}/${mainServiceID}/service`, newItem);
            setServiceItem(response.data);
        } catch (error: any) {
            console.error(error);
            setError(error.message);
        }
    };

    const updateServiceItem = async (updatedItem: Partial<any>) => {
        try {
            const response = await apiClient.put(`/${mainServiceSlug}/${mainServiceID}/service/${itemID}`, updatedItem);
            setServiceItem(response.data);
        } catch (error: any) {
            console.error(error);
            setError(error.message);
        }
    };

    const deleteServiceItem = async () => {
        try {
            await apiClient.delete(`/${mainServiceSlug}/${mainServiceID}/service/${itemID}`);
            setServiceItem(null);
        } catch (error: any) {
            console.error(error);
            setError(error.message);
        }
    };

    return { serviceItem, loading, error, createServiceItem, updateServiceItem, deleteServiceItem };
};

export default useServiceItems;

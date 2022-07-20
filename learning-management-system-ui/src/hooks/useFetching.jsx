import { useState } from "react";

export const useFetching = (callback) => {
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const fetching = async () => {
        try {
            setLoading(true);
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }
    return [fetching, isLoading, error];
}
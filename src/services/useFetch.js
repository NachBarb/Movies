import { useEffect, useState } from 'react'

const useFetch = (url, options) => {
    const [loading, SetLoading] = useState(true);
    const [result, SetResult] = useState(null);
    const [error, SetError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                SetResult(json);
                SetLoading(false);
            } catch (error) {
                SetError(error);
                SetLoading(false);
            }
        })();
    }, [options, url]);

    return { loading, result, error }
}

export default useFetch
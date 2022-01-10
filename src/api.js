import useSWR, { useSWRConfig }  from 'swr'

export const useStaleSWR = (dataKey) => {
    const apiUrl = process.env.REACT_APP_API_URL
    const fetcher = (url) => fetch(apiUrl+url).then((res) => res.json());

    const { cache } = useSWRConfig()

    const revalidationOptions = {
        revalidateOnMount: !cache.has(dataKey),
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
    };

    return useSWR(dataKey, fetcher, revalidationOptions);
}

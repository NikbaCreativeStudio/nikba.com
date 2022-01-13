import useSWR, { useSWRConfig }  from 'swr'

export function useStaleSWR(dataKey) {
    const apiUrl = process.env.REACT_APP_API_URL

    async function fetcher(url) {
        return await fetch(apiUrl + url).then(res => res.json()).catch(error => console.log(error))
    }

    const { cache } = useSWRConfig()

    const revalidationOptions = {
        revalidateOnMount: !cache.has(dataKey),
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
    }

    return useSWR(dataKey, fetcher, revalidationOptions)
}

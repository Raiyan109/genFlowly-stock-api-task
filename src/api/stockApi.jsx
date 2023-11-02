const basePath = 'https://finnhub.io/api/v1'

export const searchSymbol = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${import.meta.env.VITE_REACT_API_KEY}`

    const response = await fetch(url)
    if (!response.ok) {
        const message = `An error occured: ${response.status}`
        throw new Error(message)
    }

    return await response.json()
}
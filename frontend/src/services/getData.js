export async function getData({ term }) {
    const url = `http://localhost:3000/search?term=${term}`

    const response = await fetch(url)
    const data = await response.json()

    if (Array.isArray(data)) {
        return data
    }

    return []
}
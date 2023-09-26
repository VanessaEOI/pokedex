import axios from "axios"
import {NamedAPIResource, NamedAPIResourceList} from "@/typedef/utility"

const useFetchPageUrl = () => {
    const fetchPageUrl = async (offset: string): Promise<NamedAPIResource[]> => {
        const limit = "24"
        const cachedPageUrl = localStorage.getItem(`pageUrl-${offset}`)
        const response = await axios.get<NamedAPIResourceList>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`)
        if (!cachedPageUrl) {
            let offset = "0"
            const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            localStorage.setItem(`pageUrl-${offset}`, baseUrl)
            return baseUrl
        } else {
            const newPageUrlData = JSON.parse(response.data.next)
            const searchParam = newPageUrlData.searchParams
            let offset = searchParam.get("offset")

            const newPageUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

            localStorage.setItem(`pageUrl-${offset}`, JSON.stringify(newPageUrl))
            return JSON.parse(cachedPageUrl)
        }
    }
    return {
        fetchPageUrl
    }
}

export default useFetchPageUrl



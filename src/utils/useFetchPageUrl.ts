import axios from "axios"
import {NamedAPIResourceList} from "@/typedef/utility";

const useFetchPageUrl = () => {
    const fetchPageUrl = async (url: string): Promise<NamedAPIResourceList> => {
        const cached = localStorage.getItem(`pageUrl-${url}`)
        if (!cached) {
            const response = await axios.get<NamedAPIResourceList>(url)
            localStorage.setItem(`pageUrl-${url}`, JSON.stringify(response.data))
            return response.data
        } else {
            return JSON.parse(cached)
        }
    }

    return {
        fetchPageUrl
    }
}

export default useFetchPageUrl

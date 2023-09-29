import {ref} from "vue";
import useFetchPageUrl from "@/utils/useFetchPageUrl"
import {NamedAPIResource} from "@/typedef/utility"

const nextUrl = ref<string | null>()

const usePokemonList = () => {
    const {fetchPageUrl} = useFetchPageUrl()

    const fetchPage = async (fetchNextPage?: boolean): Promise<NamedAPIResource[]> => {
        const data = await fetchPageUrl(fetchNextPage ? (nextUrl.value as string) : 'https://pokeapi.co/api/v2/pokemon?limit=20')
        nextUrl.value = data.next
        return data.results
    }

    return {
        fetchPage,
    }
}

export default usePokemonList

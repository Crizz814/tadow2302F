import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function usePokemonesLocalQuery(params) {
    return useQuery(
        ["pokemonesLocalQuery", params], pokemonesLocalQuery, {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
        enabled: true,
    });
}

export const pokemonesLocalQuery = async (params) => {
    const [queryName, paramsFilter] = params.queryKey;
    let url = "api/pokemonesAll"
    const { data } = await clienteAxios.get(url);

    return data;
};
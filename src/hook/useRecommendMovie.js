import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendMovie=({id})=>{
    return api.get(`/movie/${id}/recommendations`);
}

export const useRecommendMovieQuery = ({id}) =>{
    return useQuery({
        queryKey:["recommend-movie", {id}],
        queryFn: () => fetchRecommendMovie({ id }),
        select: (result) => result.data.results,
    })
}
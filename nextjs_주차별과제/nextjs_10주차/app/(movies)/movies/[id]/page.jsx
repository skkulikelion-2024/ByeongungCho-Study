import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function MovieDetail({params: { id }, params: { id: string}}) {
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id = {id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieVideos id = {id}/>
        </Suspense>
    </div>
}
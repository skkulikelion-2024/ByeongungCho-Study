export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(id) {
    console.log(`Fetching movies:${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${URL}/${id}`)
    return response.json();
}

export default async function MovieInfo({id}){
    const movie = await getMovies(id);
    return <h6>{JSON.stringify(movie)} </h6>
}
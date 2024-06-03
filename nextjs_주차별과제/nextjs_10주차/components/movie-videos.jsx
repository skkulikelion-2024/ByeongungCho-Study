export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getVideos(id) {
    console.log(`Fetching videos:${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 5000));
    throw new Error('something broke...')
    //const response = await fetch(`${URL}/${id}/videos`)
    //return response.json();
}

export default async function MovieVideos({id}){
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)} </h6>
}
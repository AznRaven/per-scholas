function MovieDisplay({movie}){
    return(
        <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt=''></img>
        <h2>{movie.Year}</h2>
        <p>{movie.Plot}</p>
        </>
    )
}

export default MovieDisplay;
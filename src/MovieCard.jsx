import "./MovieCard.css";

const IMG_BASE = "https://image.tmdb.org/t/p/w300";

function MovieCard({
  movie,
  actionLabel,
  onAction,
  disabled,
  isWatchlist,
  onToggleWatched,
  onRemove,
}) {
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const posterUrl = movie.poster_path
    ? `${IMG_BASE}${movie.poster_path}`
    : null;

  return (
    <div className={`movie-card ${movie.watched ? "watched" : ""}`}>
      <div className="poster">
        {posterUrl ? (
          <img src={posterUrl} alt={`${movie.title} poster`} />
        ) : (
          <div className="no-poster">No Poster</div>
        )}
      </div>

      <div className="card-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="year">{year}</span>
          {movie.vote_average > 0 && (
            <span className="rating">
              {movie.vote_average.toFixed(1)} / 10
            </span>
          )}
        </div>

        {movie.overview && (
          <p className="overview">
            {movie.overview.length > 120
              ? movie.overview.slice(0, 120) + "..."
              : movie.overview}
          </p>
        )}

        <div className="card-actions">
          {/* Search result card -- show "Add to Watchlist" button */}
          {onAction && (
           <button
             className="btn btn-add"
             onClick={onAction}
            disabled={disabled}
           >
             {actionLabel}
          </button>
          )}

          {/* Watchlist card -- show toggle + remove buttons */}
          {isWatchlist && (
            <>
              <button className="btn btn-toggle" onClick={onToggleWatched}>
                {movie.watched ? "Mark Unwatched" : "Mark Watched"}
              </button>
              <button className="btn btn-remove" onClick={onRemove}>
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

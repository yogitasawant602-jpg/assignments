import movies from "../data/movies";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Movies</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px"
      }}>
        {movies.map(movie => (
          <div
            key={movie.id}
            style={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} width="150" />
            <h4>{movie.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

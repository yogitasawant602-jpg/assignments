import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id == id);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.name}</h2>
      <img src={movie.image} width="200" />
      <br /><br />
      <button onClick={() => navigate("/book")}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;

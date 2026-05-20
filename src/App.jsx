import { useState } from "react";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");

  const movies = [
    {
      id: 1,
      title: "Interstellar",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: 8.6,
      year: 2014,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 2,
      title: "Inception",
      image:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      rating: 8.8,
      year: 2010,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 3,
      title: "Avatar",
      image:
        "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
      rating: 7.9,
      year: 2009,
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    },
    {
      id: 4,
      title: "Joker",
      image:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      rating: 8.4,
      year: 2019,
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    },
    {
      id: 5,
      title: "Avengers Endgame",
      image:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      rating: 8.4,
      year: 2019,
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    },
    {
      id: 6,
      title: "Batman",
      image:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      rating: 7.8,
      year: 2022,
      trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🎬 Movie Streaming App
      </h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "25px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h2>{movie.title}</h2>

              <p>
                ⭐ {movie.rating} | 📅 {movie.year}
              </p>

              <button
                onClick={() => setSelectedMovie(movie)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ▶ Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              padding: "20px",
              borderRadius: "15px",
              width: "90%",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h2>{selectedMovie.title}</h2>

              <button
                onClick={() => setSelectedMovie(null)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>

            <iframe
              width="100%"
              height="500"
              src={selectedMovie.trailer}
              title={selectedMovie.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
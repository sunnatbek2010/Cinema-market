import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

export const APIKey = "1fd40a54bb7c8b5e91b107f78cdaac79";
export const img_300 = "https://image.tmdb.org/t/p/w300";

export default function Marketplace() {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState(false);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}&language=en-US`)
      .then(res => setGenres(res.data.genres));
  }, []);

  useEffect(() => {
    const url = search ? `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${search}&page=${page}`
      : `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}&page=${page}`;
    axios.get(url)
      .then(res => setItems(res.data.results));
  }, [page, search]);

  const filterByGenre = genreId => {
    setSelectedGenre(genreId);
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${genreId}&page=1`)
      .then(res => setItems(res.data.results));
  };

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Marketplace</h1>

      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <button onClick={() => setOpenCategory(!openCategory)} className="flex items-center gap-2 -gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 hover:border-white/40 transition">
            <span className="text-sm font-medium">{selectedGenre ? genres.find(g => g.id === selectedGenre)?.name : "Category"}</span>
            <svg className={`w-4 h-4 opacity-70 transition ${openCategory ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openCategory && (
            <div className="absolute left-0 mt-3 w-56 rounded-2xl  backdrop-blur-xl border border-white/10 shadow-xl max-h-64 overflow-y-auto z-50">
              <button onClick={() => { setSelectedGenre(""); setOpenCategory(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition">All</button>
              {genres.map(g => (
                <button key={g.id} onClick={() => { filterByGenre(g.id); setOpenCategory(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition">{g.name}</button>
              ))}
            </div>
          )}
        </div>

        <input type="text" placeholder="Search movie..." value={search} onChange={e => setSearch(e.target.value)} className="bg-white/10 backdrop-blur px-4 py-2 rounded-xl outline-none w-64" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.slice(0, 3).map(movie => (
          <div key={movie.id} className="backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg">
            <img src={movie.poster_path ? img_300 + movie.poster_path : ""} alt={movie.title || movie.name} className="rounded-xl mx-auto mb-4" />
            <h3 className="font-semibold">{movie.title || movie.name}</h3>
            <p className="text-sm opacity-70 mb-4">{movie.media_type === "tv" ? "TV Series" : "Movie"}</p>
            <Link to={`/info/${movie.id}`} className="
            
            
            
  inline-flex items-center justify-center
  px-6 py-2 rounded-full
  bg-gradient-to-r from-purple-600 to-indigo-600
  text-white font-semibold
  shadow-lg shadow-purple-500/30
  hover:shadow-xl hover:shadow-purple-500/50
  hover:scale-105
  active:scale-95
  transition-all duration-300


            
            ">View Details</Link>






          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-10 text-sm">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="px-4 py-1 border rounded-full disabled:opacity-30">PREV</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)} className="px-4 py-1 border rounded-full">NEXT</button>
      </div>
    </div>
  );
} 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
export const img_300 = "https://image.tmdb.org/t/p/w300";

export default function Discover() {
    const [items, setItems] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [openCategory, setOpenCategory] = useState(false);

    const api = import.meta.env.VITE_URL_ORIGINAL;
    const APIKey = import.meta.env.VITE_API_KEY;

    const fetchTrending = async () => {
        const res = await axios.get(
            `${api}trending/all/day?api_key=${APIKey}&page=${page}`
        );
        setItems(res.data.results);
    };

    const fetchGenres = async () => {
        const res = await axios.get(
            `${api}genre/movie/list?api_key=${APIKey}`
        );
        setGenres(res.data.genres);
    };

    useEffect(() => {
        fetchTrending();
        fetchGenres();
    }, []);

    useEffect(() => {
        if (!search) {
            fetchTrending();
            return;
        }

        const searchMovies = async () => {
            const res = await axios.get(
                `${api}search/movie?api_key=${APIKey}&query=${search}&page=${page}`
            );
            setItems(res.data.results);
        };

        searchMovies();
    }, [search, page]);

    const filterByGenre = async (genreId) => {
        setSelectedGenre(genreId);

        const res = await axios.get(
            `${api}discover/movie?api_key=${APIKey}&with_genres=${genreId}&page=1`
        );
        setItems(res.data.results);
    };

    return (
        <div className="min-h-screen text-white p-8">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-10 max-w-[1200px] mx-auto">
                <div className="relative">
                    <button
                        onClick={() => setOpenCategory(!openCategory)}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full border border-white/20"
                    >
                        <span>
                            {selectedGenre
                                ? genres.find((g) => g.id === selectedGenre)?.name
                                : "Category"}
                        </span>
                        <span className="opacity-60">▼</span>
                    </button>

                    {openCategory && (
                        <div className="absolute mt-3 w-56 bg-[#120f2d] rounded-xl border border-white/10 overflow-hidden z-50">
                            <button
                                onClick={() => {
                                    setSelectedGenre("");
                                    fetchTrending();
                                    setOpenCategory(false);
                                }}
                                className="w-full px-4 py-2 text-left hover:bg-white/10"
                            >
                                All
                            </button>

                            {genres.map((g) => (
                                <button
                                    key={g.id}
                                    onClick={() => {
                                        filterByGenre(g.id);
                                        setOpenCategory(false);
                                    }}
                                    className="w-full px-4 py-2 text-left hover:bg-white/10"
                                >
                                    {g.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <input
                    type="text"
                    placeholder="Search Movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white/10 px-4 py-2 rounded-xl outline-none w-64"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.03] hover:border-purple-500/40 transition-all duration-300"
                    >
                        <div className="relative">
                            <img
                                src={
                                    item.poster_path
                                        ? img_300 + item.poster_path
                                        : "https://via.placeholder.com/300x450?text=No+Image"
                                }
                                alt={item.title || item.name}
                                className="w-full h-[360px] object-cover"
                            />
                        </div>

                        <div className="p-4 flex flex-col h-[220px]">
                            <h2 className="text-lg font-bold mb-2 line-clamp-2">
                                {item.title || item.name}
                            </h2>

                            <p className="text-sm text-white/60 mb-3">
                                {item.release_date || item.first_air_date || "—"}
                            </p>

                            <p className="text-sm text-white/70 line-clamp-2 mb-auto">
                                {item.overview}
                            </p>

                            <Link to={`/info/${item.id}`} className="mt-4 py-2 rounded-xl text-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-sm cursor-pointer">
                                Подробнее
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

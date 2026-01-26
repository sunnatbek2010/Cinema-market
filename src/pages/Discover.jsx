import React, { useEffect, useState } from "react";
import axios from "axios";
export const img_300 = "https://image.tmdb.org/t/p/w300";

export default function Marketplace() {
    const [items, setItems] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [openCategory, setOpenCategory] = useState(false);

    const api = import.meta.env.VITE_URL_ORIGINAL;
    const APIKey = import.meta.env.VITE_API_KEY;

    const fetchData = async () => {
        try {
            const response = await axios.get(`${api}trending/all/day?api_key=${APIKey}&page=${page}`);
            setItems(response.data.results);
            console.log(response);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        const url = search ? `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${search}&page=${page}`
            : `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}&page=${page}`;
        axios.get(url).then(res => setItems(res.data.results));
    }, [page, search]);
    const filterByGenre = (genreId) => { setSelectedGenre(genreId); axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${genreId}&page=1`).then(res => setItems(res.data.results)); };

    return (
        <div className="min-h-screen text-white p-8">
            <div className="flex items-center justify-between mb-8">
                <div className="relative">
                    <button onClick={() => setOpenCategory(!openCategory)} className="flex items-center gap-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 hover:border-white/40 transition">
                        <span className="text-sm font-medium">{selectedGenre ? genres.find(g => g.id === selectedGenre)?.name : "Category"}</span>
                        <svg className={`w-4 h-4 opacity-70 transition ${openCategory ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {openCategory && <div className="absolute left-0 mt-3 w-56 rounded-2xl bg-[#120f2d]/95 backdrop-blur-xl border border-white/10 shadow-xl max-h-64 overflow-y-auto z-50">
                        <button onClick={() => { setSelectedGenre(""); setOpenCategory(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition">All</button>
                        {genres.map(g => <button key={g.id} onClick={() => { filterByGenre(g.id); setOpenCategory(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition">{g.name}</button>)}
                    </div>}
                </div>
                <input type="text" placeholder="Search movie..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-white/10 backdrop-blur px-4 py-2 rounded-xl outline-none w-64" />
            </div>
            <div className="flex items-center justify-between max-w-[1140px] flex-wrap mx-auto">

                {
                    items.map(item => (
                        <div key={item.id} className="flex items-center gap-4 mb-6 bg-white/5 p-4 rounded-xl max-w-[400px] min-w-[400px]">
                            <img src={img_300 + item.poster_path} alt={item.title || item.name} className="w-24 rounded-lg" />
                            <div>
                                <h2 className="text-xl font-bold mb-2">{item.title || item.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
}

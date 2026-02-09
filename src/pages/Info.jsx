import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Undo2 } from 'lucide-react';
export const img_300 = "https://image.tmdb.org/t/p/w300";

const Info = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const api = import.meta.env.VITE_URL_ORIGINAL;
  const APIKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(
        `${api}movie/${id}?api_key=${APIKey}&language=ru-RU`
      );
      setItem(res.data);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="p-10">
      <div className="flex items-center max-w-[1280px] mx-auto gap-10 mt-10">
        <div className="p-2 -white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden flex-shrink-0">
          <img
            className="rounded-2xl"
            src={
              item?.poster_path
                ? img_300 + item?.poster_path
                : "https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg"
            }
          />

        </div>


        <div>
          <h1 className="mb-30 text-4xl font-bold -white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
            {item?.title}
          </h1>

          <p className="mt-6 opacity-80 -white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
            {item?.release_date}
          </p>

          <p className="mt-6 opacity-80 -white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
            {item?.overview}
          </p>
        </div>

        <p className="mt-6 opacity-80 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
          {item?.release_date}
        </p>

        <p className="mt-6 opacity-80 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
          {item?.overview}
        </p>
      </div>

    </div>
  );
};

export default Info;

import React, { useState } from 'react';
import axios from 'axios';
import { Skeleton } from 'primereact/skeleton';
import bg from './../assets/Rectangle 4.png';


const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const img_300 = import.meta.env.VITE_IMG_300;
  const APIKey = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;


  const fetchMovies = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${BASE_URL}discover/movie`, {
        params: {
          api_key: APIKey,
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false
        }
      });
      setData(res.data.results.slice(0, 8));
    } catch (err) {
      console.error(err);
    }
    setLoading(false)
  };
  const fetchSeries = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${BASE_URL}discover/tv`, {
        params: {
          api_key: APIKey,
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false
        }
      });
      setData(res.data.results.slice(0, 8));
    } catch (err) {
      console.error(err);
    }
    setLoading(false)
  };

  return (
    <div>
      <div className='min-h-screen bg-[#0b0f2a] bg-[radial-gradient(ellipse_at_top_left,_rgba(168,85,247,0.35)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.35)_0%,_transparent_50%)]'>

        <div style={{ backgroundImage: `url(${bg})` }}>
          <div className='w-[1110px] pt-45 pb-[300px] mx-auto'>
            <h1 className='text-white text-[46px] text-center  font-bold'>NFTs by Curios Music</h1>
            <p className='text-white text-[20px] mt-3 text-center '>Own a one-of-a-kind and limited digital collectible</p>
            <div className='flex justify-center mt-[27px]'>
              <button className='text-white bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] font-bold  py-3.5 px-10 rounded-[46px] '>Latest NFT drops</button>
            </div>
          </div>
        </div>


        <main>
          <section className='w-[1110px] pt-[90px] pb-[160px] mx-auto'>
            <h2 className='text-[36px] font-bold text-white text-center animate-bounce'>Movies</h2>

            <div className='flex justify-center gap-[43px] mt-[28px] mb-[50px]'>
              <button className='text-white mt-[28px] font-bold rounded-[23px] py-[8px] px-[16px] hover:bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] text-[14px]' onClick={fetchMovies}>Discover Movie</button>
              <button className='text-white mt-[28px] font-bold rounded-[23px] py-[8px] px-[16px] hover:bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] text-[14px]' onClick={fetchSeries}>Discover TV Series</button>
            </div>

            <div className='flex flex-wrap justify-center gap-[30px]'>
              {loading
                ? Array(8).fill(0).map((_, i) => (
                  <div key={i} className='w-[255px] py-[20px] px-[20px] bg-gray-500 rounded-[10px] flex flex-col items-center'>
                    <Skeleton shape="rectangle" className="w-full h-[380px] rounded-[5px]" />
                    <Skeleton className="mt-3 w-3/4 h-5" />
                    <Skeleton className="mt-2 w-1/2 h-4" />
                    <Skeleton className="mt-4 w-2/3 h-10 rounded-[46px]" />
                  </div>
                ))
                : data.map((item) => (
                  <div key={item.id} className='w-[255px] py-[20px] px-[20px] bg-[radial-gradient(2464.13%_850.69%_at_100%_6.65%,_#BB82DB_0%,_#636DC1_19.3%,_#1D0F35_100%)] rounded-[10px] flex flex-col items-center'>
                    <img className='rounded-[5px]' src={item.poster_path ? `${img_300}${item.poster_path}` : ''} alt={item.title || item.name} />
                    <p className='text-white line-clamp-1 font-bold mt-3 text-center'>{item.title || item.name}</p>
                    <p className='text-white text-center mt-1'>⭐ {item.vote_average}</p>
                    <div className='mt-4 flex justify-center'>
                      <button className='bg-white font-bold py-3.5 px-10 rounded-[46px] text-transparent bg-clip-text bg-[linear-gradient(90deg,#5D00FA_0%,#D70BCA_100%)]'>View details</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        </main>
      </div >
    </div>
  );
};

export default Home;

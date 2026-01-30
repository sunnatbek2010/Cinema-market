import React, { useState } from 'react';
import axios from 'axios';
import { Skeleton } from 'primereact/skeleton';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { MonitorPause, ThumbsDown, ThumbsUpIcon } from 'lucide-react';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const img_300 = import.meta.env.VITE_IMG_300;
  const APIKey = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}discover/movie`, {
        params: {
          api_key: APIKey,
          language: 'en-US',
          sort_by: 'popularity.desc'
        }
      });
      setData(res.data.results.slice(0, 8));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const fetchSeries = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}discover/tv`, {
        params: {
          api_key: APIKey,
          language: 'en-US',
          sort_by: 'popularity.desc'
        }
      });
      setData(res.data.results.slice(0, 8));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const openModal = (item) => {
    setSelectedCard(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCard(null);
  };

  const selectOption = async (option) => {
    if (!selectedCard) return;

    const cardWithAction = { ...selectedCard, action: option };

    try {
      const res = await axios.get(`http://localhost:3000/liked?id=${selectedCard.id}`);
      if (res.data.length > 0) {
        const existingId = res.data[0].id;
        await axios.put(`http://localhost:3000/liked/${existingId}`, cardWithAction);
      } else {
        await axios.post('http://localhost:3000/liked', cardWithAction);
      }
    } catch (err) {
      console.error('Ошибка при сохранении карточки в db.json:', err);
    }
    3
    closeModal();
  };

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="">
      <div className="w-[1110px] pt-45 pb-[300px] mx-auto">
        <h1 className="text-white text-[46px] text-center font-bold">NFTs by Curios Music</h1>
        <p className="text-white text-[20px] mt-3 text-center">Own a one-of-a-kind and limited digital collectible</p>
        <div className="flex justify-center mt-[27px]">
          <button className="text-white bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] font-bold py-3.5 px-10 rounded-[46px]">Latest NFT drops</button>
        </div>
      </div>

      <main>
        <section className="w-[1110px] pt-[90px] pb-[160px] mx-auto">
          <h2 className="text-[36px] font-bold text-white text-center animate-bounce">Movies</h2>
          <div className="flex justify-center gap-[43px] mt-[28px] mb-[50px]">
            <button className="text-white mt-[28px] font-bold rounded-[23px] py-[8px] px-[16px] hover:bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] text-[14px]" onClick={fetchMovies}>Discover Movie</button>
            <button className="text-white mt-[28px] font-bold rounded-[23px] py-[8px] px-[16px] hover:bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] text-[14px]" onClick={fetchSeries}>Discover TV Series</button>
          </div>

          <div className="flex flex-wrap justify-center gap-[30px]">
            {loading
              ? Array(8).fill(0).map((_, i) => (
                <div key={i} className="w-[255px] py-[20px] px-[20px] bg-gray-500 rounded-[10px] flex flex-col items-center">
                  <Skeleton shape="rectangle" className="w-full h-[380px] rounded-[5px]" />
                  <Skeleton className="mt-3 w-3/4 h-5" />
                  <Skeleton className="mt-2 w-1/2 h-4" />
                  <Skeleton className="mt-4 w-2/3 h-10 rounded-[46px]" />
                </div>
              ))
              : data.map((item) => (
                <div key={item.id} className="w-[255px] py-[20px] px-[20px] bg-[radial-gradient(2464.13%_850.69%_at_100%_6.65%,_#BB82DB_0%,_#636DC1_19.3%,_#1D0F35_100%)] rounded-[10px] flex flex-col items-center relative">
                  <div className="absolute top-2 right-2 cursor-pointer text-white text-xl font-bold" onClick={() => openModal(item)}>⋮</div>
                  <img className="rounded-[5px]" src={item.poster_path ? `${img_300}${item.poster_path}` : ''} alt={item.title || item.name} />
                  <p className="text-white line-clamp-1 font-bold mt-3 text-center">{item.title || item.name}</p>
                  <p className="text-white text-center mt-1">⭐ {item.vote_average}</p>
                  <button onClick={() => navigate('/profile')} className="bg-white font-bold py-3.5 px-10 rounded-[46px] text-transparent bg-clip-text bg-[linear-gradient(90deg,#5D00FA_0%,#D70BCA_100%)] mt-4">View details</button>
                </div>
              ))}
          </div>
        </section>
      </main>

      {modalVisible && selectedCard && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#1E1E37] p-6 rounded-xl w-[300px] text-center relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-white text-xl font-bold">×</button>
            <h2 className="text-white text-[18px] font-bold mb-4">Выберите вариант</h2>
            <div className="flex flex-col gap-3">
              <button onClick={() => selectOption('Нравится')} className="py-2 px-4 rounded-full flex items-center gap-2  bg-green-500 text-white font-bold"> <ThumbsUpIcon /> Нравится</button>
              <button onClick={() => selectOption('Не нравится')} className="py-2 px-4 flex items-center gap-2 rounded-full bg-red-500 text-white font-bold"> <ThumbsDown /> Не нравится</button>
              <button onClick={() => selectOption('Смотрел')} className="py-2 px-4 flex items-center gap-2 rounded-full bg-blue-500 text-white font-bold"><MonitorPause /> Смотрел</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketplaceCard = () => {
  const [cards, setCards] = useState([]);
  const img_300 = import.meta.env.VITE_IMG_300;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get('http://localhost:3000/actions');
        setCards(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="min-h-screen py-10">
      <div className="w-[1110px] mx-auto">
        <h1 className="text-white text-[36px] font-bold text-center mb-10">Marketplace</h1>

        {cards.length === 0 ? (
          <p className="text-white text-center">Нет выбранных карточек</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-[30px]">
            {cards.map((item) => (
              <div key={item.id} className="w-[255px] py-[20px] px-[20px] -[radial-gradient(2464.13%_850.69%_at_100%_6.65%,_#BB82DB_0%,_#636DC1_19.3%,_#1D0F35_100%)] rounded-[10px] flex flex-col items-center" >
                <img className="rounded-[5px]" src={item.poster_path ? `${img_300}${item.poster_path}` : ''} alt={item.title || item.name} />
                <p className="text-white line-clamp-1 font-bold mt-3 text-center">{item.title || item.name}</p>
                <p className="text-white text-center mt-1">⭐ {item.vote_average}</p>
                {item.action && (
                  <p className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#5D00FA_0%,#D70BCA_100%)] text-center mt-2 font-semibold">{item.action}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceCard;

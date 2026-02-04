import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Liked = () => {
  const [cards, setCards] = useState([])
  const [filter, setFilter] = useState(null)

  const img_300 = import.meta.env.VITE_IMG_300

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get('http://localhost:3000/liked')
        setCards(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchCards()
  }, [])

  const filteredCards = filter ? cards.filter(card => card.action === filter) : cards

  return (
    <div className="flex-1 text-white rounded-md p-8">

      {filteredCards.length === 0 ? (
        <p className="text-center">Нет выбранных карточек</p>) : (
        <div className="flex flex-wrap gap-8">
          {filteredCards.map(item => (
            <div key={item.id} className="w-[255px] py-5 px-5 rounded-[10px] flex flex-col items-center border">
              <img className="rounded-md" src={item.poster_path ? `${img_300}${item.poster_path}` : ''} alt={item.title || item.name} />
              <p className="font-bold mt-3 text-center line-clamp-1">{item.title || item.name}</p>
              <p className="mt-1">⭐ {item.vote_average}</p>
              <p className="mt-2 font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#5D00FA_0%,#D70BCA_100%)]">{item.action}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Liked
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Disliked = () => {

    const [cards, setCards] = useState([])
    const [filter, setFilter] = useState(null)

    const img_300 = import.meta.env.VITE_IMG_300

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await axios.get('http://localhost:3000/disliked')
                setCards(res.data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchCards()
    }, [])

    const filteredCards = filter ? cards.filter(card => card.action === filter) : cards


    return (
        <div className=" text-white">
            <div className="max-w-[1400px] mx-auto flex gap-8 p-12 items-start">

                <div className="flex-1 bg-[#1E1E37] rounded-md p-8">
                    <h1 className="text-[32px] font-bold text-center mb-10 animate-bounce">List of Movies & Series</h1>

                    {filteredCards.length === 0 ? (
                        <p className="text-center">Нет выбранных карточек</p>) :
                        (
                            <div className="flex flex-wrap justify-center gap-8">
                                {filteredCards.map(item => (
                                    <div key={item.id} className="w-[255px] py-5 px-5 bg-[radial-gradient(2464.13%_850.69%_at_100%_6.65%,_#BB82DB_0%,_#636DC1_19.3%,_#1D0F35_100%)] 
                  rounded-[10px] flex flex-col items-center">
                                        <img className="rounded-md" src={item.poster_path ? `${img_300}${item.poster_path}` : ''} alt={item.title || item.name} />
                                        <p className="font-bold mt-3 text-center line-clamp-1">{item.title || item.name}</p>
                                        <p className="mt-1">⭐ {item.vote_average}</p>
                                        <p className="mt-2 font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#5D00FA_0%,#D70BCA_100%)]">{item.action}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Disliked
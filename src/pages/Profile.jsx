import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Heart, MonitorPause, ThumbsDown, SatelliteDish } from 'lucide-react'
import LinksProfile from '../components/Props/LinksProfile'

const Profile = () => {
  const [cards, setCards] = useState([])
  const [filter, setFilter] = useState(null)

  const img_300 = import.meta.env.VITE_IMG_300

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get('http://localhost:3000/actions')
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


        <div className="bg-[#1E1E37] w-[280px] rounded-md p-7">
          <div className="flex gap-4 items-center">
            <img src="src/assets/Ellipse 180.svg" alt="avatar" />
            <div>
              <h3 className="font-bold">Annette Black</h3>
              <p className="text-sm opacity-70">Joined Nov 25, 2021</p>
            </div>
          </div>

          <div className="h-[1px] bg-gray-600 w-full my-8"></div>

          <ul className="flex flex-col gap-4">
            <li onClick={() => setFilter("Нравится")} className="cursor-pointer">
              <LinksProfile navTitle="Liked movies"><Heart /></LinksProfile>
            </li>

            <li onClick={() => setFilter("Не нравится")} className="cursor-pointer">
              <LinksProfile navTitle="Disliked movies"><ThumbsDown /></LinksProfile>
            </li>

            <li onClick={() => setFilter("Смотрел")} className="cursor-pointer">
              <LinksProfile navTitle="Watched movies"><MonitorPause /></LinksProfile>
            </li>

            <li onClick={() => setFilter(null)} className="cursor-pointer">
              <LinksProfile navTitle="All movies"><SatelliteDish /></LinksProfile>
            </li>
          </ul>
        </div>

        <div className="bg-[#1E1E37] rounded-md p-8 w-[350px]">
          <h1 className="text-xl font-bold mb-2">Update Your Profile</h1>
          <p className="text-sm opacity-70 mb-6">All fields are required to complete your profile for bidding.</p>
          <div className="flex flex-col gap-4">
            <input className="rounded-full bg-transparent border border-gray-500 p-3" placeholder="First Name" />
            <input className="rounded-full bg-transparent border border-gray-500 p-3" placeholder="Last Name" />
            <input className="rounded-full bg-transparent border border-gray-500 p-3" placeholder="Display Name" />
            <input className="rounded-full bg-transparent border border-gray-500 p-3" placeholder="Phone Number" />
            <button className="bg-[#D70BCA] py-3 rounded-full font-bold mt-2">Save changes</button>
          </div>
        </div>


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

export default Profile

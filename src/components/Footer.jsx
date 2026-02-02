import {
  Mail,
  Send,
  Instagram,
  Twitter,
  SendHorizontal,
  ArrowUp,
  Apple,
  Play
} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-300 pt-20 px-6">
      <div className="w-[1110px] mx-auto text-center mb-16">
        <p className="mb-4 text-sm text-gray-400">Enter your email to subscribe to our newsletter</p>
        <div className="flex max-w-md mx-auto items-center bg-black/40 rounded-full px-4 py-2 border border-white/10"> <Mail size={18} className="text-gray-400 mr-2" />
          <input type="email" placeholder="Your email" className="bg-transparent flex-1 outline-none text-sm" />
          <button className="bg-purple-600 hover:bg-purple-700 transition p-2 rounded-full"><Send size={18} className="text-white" /></button>
        </div>
      </div>


      <div className="w-[1110px] mx-auto flex gap-[153px] pb-16">
        <div>
          <h4 className="text-[14px] border-b font-semibold mb-4">CONNECT</h4>
          <p className="text-[14px] mb-4">support@curios.com</p>
          <div className="flex gap-4">
            <Instagram className="hover:text-white cursor-pointer" size={18} />
            <SendHorizontal className="hover:text-white cursor-pointer" size={18} />
            <Twitter className="hover:text-white cursor-pointer" size={18} />
          </div>
        </div>

        <div>
          <h4 className="text-[14px] border-b font-semibold mb-4">MOBILE APP</h4>
          <div>
            <button className="flex items-center gap-3 border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition"><Apple size={20} /><span className="text-sm">App Store</span></button>
            <button className="flex mt-2 items-center gap-3 border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition"><Play size={20} /><span className="text-sm">Google Play</span></button>
          </div>
        </div>


        <div>
          <h4 className="text-[14px]  border-b font-semibold mb-4">ABOUT</h4>
          <ul className=" text-[14px]">
            <li className="hover:text-white cursor-pointer">About This Marketplace</li>
            <li className="hover:text-white mt-2 cursor-pointer">Frequently Asked Questions</li>
          </ul>
        </div>


        <div>
          <h4 className="text-[14px] border-b font-semibold mb-4">LEGALESE</h4>
          <ul className=" text-[14px]">
            <li className="hover:text-white mt-2  cursor-pointer">Terms</li>
            <li className="hover:text-white mt-2  cursor-pointer">Privacy</li>
            <li className="hover:text-white mt-2  cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-white mt-2 cursor-pointer">Taxes & Fees</li>
          </ul>
        </div>
      </div>


      <div className=" py-6 flex items-center justify-between w-[1110px] mx-auto text-[14px] text-white">
        <span>© 2021 Curios Music. All rights reserved</span>
        <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"><ArrowUp size={16} className="text-white" /></button>
      </div>
    </footer>
  );
}

import { FaCartPlus, FaHeart } from 'react-icons/fa';
export default function Card({ image, title, prix }) {
  return (
    <div className="w-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
      <div className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition duration-300">
        <button className="p-1 rounded-full hover:bg-gray-600">
          <FaHeart size={20} />
        </button>
      </div>

      <div
        className="h-40 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image || '/images/datte-majhoul-01-jpg.jpg'})`, // Placeholder si image absente
        }}


      >
        <img src={image || '/images/datte-majhoul-01-jpg.jpg'} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="relative p-3">
        <h2 className="text-xl text-black font-semibold mb-1 truncate">{title}</h2>
        <p className="text-gray-1000 font-bold text-lg">{prix} MAD</p>

        <button className="mt-3 w-full flex items-center justify-center bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-400 transition duration-200">
          <FaCartPlus size={18} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

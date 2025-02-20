// eslint-disable-next-line react/prop-types
export default function Blogscart({image,category,description,name}) {
  return (
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl h-[30rem] bg-white p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={image}
          loading="lazy"
          alt="pods"
          className="w-full h-56 object-cover rounded-lg"
        />
        <div className="py-4 text-center">
          <span className="text-xs text-gray-500 uppercase font-semibold tracking-wide">
            {category}
          </span>
          <h2 className="text-2xl font-bold mt-2 text-gray-800 line-clamp-2">{name}</h2>
          <p className="text-gray-600 mt-2 text-sm line-clamp-4">{description}</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

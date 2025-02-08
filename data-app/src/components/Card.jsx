const Card = ({ title, imageUrl, description }) => (
  <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
    <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
    <img className="w-30 mx-auto mb-8" src={imageUrl} alt={title} />
    <p className="py-2 mx-8 text-center font-medium">{description}</p>
  </div>
);

export default Card;
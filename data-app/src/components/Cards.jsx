import Card from './Card';

const Cards = () => {
  const cardData = [
    { title: "Draft one", imageUrl: "https://picsum.photos/200", description: "random" },
    { title: "Draft two", imageUrl: "https://picsum.photos/200", description: "random" },
    { title: "Draft three", imageUrl: "https://picsum.photos/200", description: "random" },
    { title: "Draft four", imageUrl: "https://picsum.photos/200", description: "random" },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="mx-auto text-center flex flex-col justify-center md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black">
        Random text random
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
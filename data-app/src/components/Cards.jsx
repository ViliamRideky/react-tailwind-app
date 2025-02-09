import Card from './Card';
import Vinco from '../assets/vinco.png'
import Strelec from '../assets/strelec.png'
import Dinho from '../assets/dinho.png'
import PingPong from '../assets/pingpong.png'

const Cards = () => {
  const cardData = [
    { title: "Peťko Best", imageUrl: Strelec, description: "Opúšťa sa, že to nevie hrať, potom prejde cez troch a je vymalované." },
    { title: "Lukyno", imageUrl: PingPong, description: "Šprinty po kraji sú jeho ultimátka, ale keď treba, trpezlivo čaká za čiarou." },
    { title: "Vilko", imageUrl: Dinho, description: "Obalovačky z 30 metrov má silné, Václav Černý by vedel rozprávať." },
    { title: "Mentorko", imageUrl: Vinco, description: "Kľučky má ligové, ale kick-off glitch vidí aj tam, kde neexistuje." },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="mx-auto text-center flex flex-col justify-center md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black uppercase">
        Naši Vyvolení
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
import { ReactTyped } from "react-typed";

const Hero = ({ handleScroll, patronRef }) => {
    return (
        <div className="text-white">
            <div className="max-w-[1200px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#1cc9da] md:text-3xl sm:text-2xl text-xl font-bold p-2">FUT DRAFT</p>
                <h1 className="md:text-5xl sm:text-4xl text-xl font-bold md:py-6">Drafty u Lukyna</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Reprezentujú nás </p>
                    <ReactTyped 
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={['Peťko Best','Lukyno', 'Vilko', 'Mentorko']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold mt-4 text-gray-500">Štyria chalani, jeden byt a nekonečné napätie pri výbere hráčov</p>
                <p className="md:text-2xl text-xl font-bold mt-4 text-gray-500">to je FIFA Draft u Lukyna!</p>
                <button onClick={() => handleScroll(patronRef)} className="bg-[#1cc9da] w-[200px] rounded-md my-6 mx-auto py-3 font-bold text-black">Peťko BEST</button>
            </div>
        </div>
    )
}

export default Hero
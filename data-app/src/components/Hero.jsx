import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#d69f27] font-bold p-2">RANDOM TEXT</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Random text random</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Random, randit randoming for</p>
                    <ReactTyped 
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={['first','second', 'third']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold mt-4 text-gray-500">Lorem ipsum dolor sit amet.</p>
                <button className="bg-[#d69f27] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Button here</button>
            </div>
        </div>
    )
}

export default Hero
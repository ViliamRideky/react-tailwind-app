import { useState, useEffect } from 'react';
import { BiSolidBeer } from 'react-icons/bi';
import { PiBeerBottleThin } from "react-icons/pi";

const Final = () => {
    // Initialize state with values from localStorage, or 0 if none exist
    const [beerCount, setBeerCount] = useState(() => {
        const savedBeerCount = localStorage.getItem('beerCount');
        return savedBeerCount ? parseInt(savedBeerCount) : 0;
    });

    const [wineCount, setWineCount] = useState(() => {
        const savedWineCount = localStorage.getItem('wineCount');
        return savedWineCount ? parseInt(savedWineCount) : 0;
    });

    // Update localStorage whenever counts change
    useEffect(() => {
        localStorage.setItem('beerCount', beerCount.toString());
    }, [beerCount]);

    useEffect(() => {
        localStorage.setItem('wineCount', wineCount.toString());
    }, [wineCount]);

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto text-black">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Počet vypitých pív počas draftu:</h2>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setBeerCount(prev => Math.max(0, prev - 1))}
                            className="bg-[#1cc9da] text-black px-4 py-2 rounded-lg font-bold text-xl hover:bg-[#4ff0ff]"
                        >
                            -
                        </button>
                        <div className="flex items-center gap-2">
                            <BiSolidBeer size={32} className="text-[#1cc9da]" />
                            <span className="text-4xl font-bold">{beerCount}</span>
                        </div>
                        <button
                            onClick={() => setBeerCount(prev => prev + 1)}
                            className="bg-[#1cc9da] text-black px-4 py-2 rounded-lg font-bold text-xl hover:bg-[#4ff0ff]"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Počet vypitých fliaš počas draftu:</h2>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setWineCount(prev => Math.max(0, prev - 1))}
                            className="bg-[#1cc9da] text-black px-4 py-2 rounded-lg font-bold text-xl hover:bg-[#4ff0ff]"
                        >
                            -
                        </button>
                        <div className="flex items-center gap-2">
                            <PiBeerBottleThin size={32} className="text-[#1cc9da]" />
                            <span className="text-4xl font-bold">{wineCount}</span>
                        </div>
                        <button
                            onClick={() => setWineCount(prev => prev + 1)}
                            className="bg-[#1cc9da] text-black px-4 py-2 rounded-lg font-bold text-xl hover:bg-[#4ff0ff]"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Final;
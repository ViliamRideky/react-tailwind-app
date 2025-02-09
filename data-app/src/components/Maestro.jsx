const Maestro = () => {
    return (
        <div className="w-full bg-[#000400] py-16 px-4 text-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                           <div className='flex flex-col justify-center'>
                                   <h1 className='text-[#1cc9da] uppercase md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Robo Kazík</h1>
                                   <h2 className='uppercase md:text-2xl sm:text-xl font-bold py-4'>Hudobný maestro</h2>
                                   <p className='fond-bold'>Pri FIFA Drafte, v pozadí znie jedine Robo Kazík – hudobný virtuóz, ktorého hlas dodáva našim zápasom epickú atmosféru. Jeho nestarnúce hity nás sprevádzajú každým draftom, lebo pravá futbalová vášeň si zaslúži legendárny hudobný doprovod!</p>
                                   <p className="text-xl italic py-4 text-gray-400">Hrkú, hrkú máme sucho v krku.</p>
                               </div>
                               <iframe 
                                    src="https://open.spotify.com/embed/album/6iOu2EnN0TNDnmKlmF240q" 
                                    width="370"
                                    height="380"
                                    style={{ border: 0 }}
                                    allow="encrypted-media"
                                    loading="lazy"
                                    className="mx-auto"
                                ></iframe>
                           </div>
        </div>
    )
}

export default Maestro
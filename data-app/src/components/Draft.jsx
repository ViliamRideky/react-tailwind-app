import Logo from '../assets/logo.png'

const Draft = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto' src={Logo} alt="draft-logo" />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-[#1cc9da] uppercase md:text-4xl sm:text-3xl text-2xl font-bold py-2'>FUT DRAFT</h1>
                    <p className='fond-bold'>FIFA Draft je herný režim v sérii FIFA, kde si hráči zostavujú tím z náhodne ponúkaných kariet futbalistov a následne s ním súťažia v turnajovom formáte. Každé rozhodnutie pri výbere hráčov ovplyvňuje tímovú chémiu a taktiku, takže stratégia zohráva kľúčovú úlohu. Predstav si to ako futbalovú lotériu, kde môžeš postaviť vysnívanú zostavu hviezd alebo improvizovať s nečakanými kombináciami!</p>
                    <h2 className='uppercase md:text-3xl sm:text-2xl text-xl font-bold py-4'>Náš rekord: 14-41</h2>
                </div>
            </div>
        </div>
    )
}

export default Draft


import Best from '../assets/patron.png'

const Patron = () => {
   return (
           <div className="w-full bg-[#000400] py-16 px-4 text-white">
               <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
               <div className='flex flex-col justify-center'>
                       <h1 className='text-[#1cc9da] uppercase md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Peťko Best</h1>
                       <h2 className='uppercase md:text-2xl sm:text-xl font-bold py-4'>Miloval ženy a alkohol. Bol najlepší!</h2>
                       <p className='fond-bold'>To priezvisko mu celkom sedelo. Best znamená v angličtine najlepší.
                       A najslávnejší severoírsky futbalista George Best patril vo svojej ére k najlepším. Preslávil sa v drese Manchester United, s ktorým vyhral Európsky pohár majstrov a stal sa aj najlepším futbalistom Starého kontinentu. Keď bol v najlepších futbalových rokoch, jeho ďalšiu kariéru výrazne ovplyvnila nedisciplinovanosť a permanentné problémy so životosprávou.</p>
                       <p className="text-xl italic py-4 text-gray-400">V roku 1969 som sa vzdal žien a alkoholu – bolo to najhorších 20 minút v mojom živote.</p>
                   </div>
                   <img className='w-[300px] mx-auto' src={Best} alt="best" />
               </div>
           </div>
       )
}

export default Patron
// import Best from '../assets/patron.png'

const Patron = () => {
   return (
           <div className="w-full bg-[#000700] py-16 px-4 text-white">
               <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
               <div className='flex flex-col justify-center'>
                       <p className='text-[#d69f27] font-bold uppercase'>Lorem ipsum dolor sit amet.</p>
                       <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid modi assumenda odit vitae tempora velit nobis incidunt, iusto perferendis, quo pariatur est veniam iste quod architecto aperiam, illum amet.</h1>
                   </div>
                   <img className='w-[300px] mx-auto' src="https://picsum.photos/200" alt="best" />
               </div>
           </div>
       )
}

export default Patron
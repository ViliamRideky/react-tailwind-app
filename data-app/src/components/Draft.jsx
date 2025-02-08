import Logo from '../assets/logo.png'

const Draft = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto' src={Logo} alt="draft-logo" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#d69f27] font-bold uppercase'>Lorem ipsum dolor sit amet.</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid modi assumenda odit vitae tempora velit nobis incidunt, iusto perferendis, quo pariatur est veniam iste quod architecto aperiam, illum amet.</h1>
                </div>
            </div>
        </div>
    )
}

export default Draft
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

import image from '../image/japan.jpg';

function Hero() {
	return (
		<>
			<div
				style={{ background: `url(${image.src}) center center no-repeat` }}
				className='relative'
			>
				<div className=' bg-gradient-to-b from-transparent via-transparent to-[rgb(4,0,5)] backdrop-blur-xs md:backdrop-blur-none'>
					<div className='bg-gradient-to-r from-[rgb(4,0,5)] via-[rgba(4,0,5,0.5)] to-transparent'>
						<div className='max-w-[680px] md:px-20 px-[10%] py-24 pt-10 md:py-40 '>
							<h1 className=' font-jakarta flex flex-col font-bold text-xl mobilel:text-2xl md:text-5xl tracking-wide text-gray-300 '>
								<span>Znajdź fachowca</span>
								<span>W odpowiednim czasie.</span>
							</h1>
							<p className='mt-6 text-md text-gray-300 font-semibold font-jakarta md:text-lg'>
								Zapewniamy dostęp do wyszkolonych pracowników z całej Polski,
								który wykonają każdą pracę!
							</p>
							<div className='flex mobilel:justify-between gap-4 flex-wrap justify-center mt-10 max-w-[450px]'>
								<div className='font-jakarta w-fit'>
									<h3 className='flex justify-center font-bold gap-1 text-3xl md:text-4xl text-gray-50'>
										250 <span className=' text-blue-600'>+</span>
									</h3>
									<p className='font-semibold text-sm text-gray-300 tracking-wide'>
										Google Reviews
									</p>
								</div>
								<div className='font-jakarta w-fit'>
									<h3 className='flex justify-center font-bold gap-1 text-3xl md:text-4xl text-gray-50'>
										570 <span className=' text-blue-600'>+</span>
									</h3>
									<p className='font-semibold text-sm text-gray-300 tracking-wide '>
										Google Reviews
									</p>
								</div>
								<div className='font-jakarta w-fit'>
									<h3 className='flex justify-center font-bold gap-1 text-3xl md:text-4xl text-gray-50'>
										420 <span className=' text-blue-600'>+</span>
									</h3>
									<p className='font-semibold text-sm text-gray-300 tracking-wide'>
										Google Reviews
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute bottom-5 left-2/4 -translate-x-2/4 text-gray-300'>
					<BsFillArrowDownCircleFill size={50} className='animate-bounce' />
				</div>
			</div>
			<div className='h-44 bg-[rgb(4,0,5)] font-jakarta text-gray-200 flex justify-center'>
				<h2 className=' text-3xl font-semibold py-5'>O Nas</h2>
			</div>
		</>
	);
}

export default Hero;

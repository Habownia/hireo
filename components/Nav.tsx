import { useState } from 'react';
import Link from 'next/link';
import { GiNinjaHeroicStance } from 'react-icons/gi';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

import SEO from './seo';

function Nav(props: { isLogged: boolean }) {
	const [show, setShow] = useState(false);

	function showBurger(): void {
		setShow((prevState) => !prevState);
	}

	return (
		<>
			<SEO />
			<header className='bg-gray-800'>
				<div className='px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex-1 md:flex md:items-center md:gap-12'>
							<Link href='/'>
								<div className='flex items-end gap-1 text-gray-300 cursor-pointer'>
									<GiNinjaHeroicStance size={45} className='pb-1' />
									<span className='text-2xl mobilem:text-3xl font-semibold font-apple tracking-wide'>
										Hireo
									</span>
								</div>
							</Link>
						</div>
						<div className='sm:flex md:items-center md:gap-12'>
							<nav
								className={`md:block md:p-0 md:flex-row md:bg-transparent md:static md:h-auto md:w-auto ${
									show
										? 'flex flex-col p-16 items-center absolute top-0 left-0 w-full h-4/5 z-20 bg-[#001222]'
										: 'hidden'
								}`}
								aria-labelledby='header-navigation'
							>
								<h2
									className={`${
										show ? 'block' : 'hidden'
									} md:hidden text-gray-200 text-xl p-2`}
								>
									Navigation
								</h2>
								<ul
									className={`flex md:flex-row md:border-none md:p-0 items-center text-md gap-6 text-gray-200 ${
										show ? 'flex-col pt-8 border-t-2 border-gray-400' : ''
									}`}
								>
									<li className='transition hover:text-gray-300/75'>
										<Link href='/'>Usługi</Link>
									</li>
									<li className='transition hover:text-gray-300/75'>
										<Link href='/callendar'>Kalendarz</Link>
									</li>
									<li className='transition hover:text-gray-300/75'>
										<Link href='/'>Kontakt</Link>
									</li>
								</ul>
								<AiFillCloseCircle
									size={30}
									color='white'
									className={`md:hidden md:static cursor-pointer ${
										show ? 'block absolute top-5 right-5' : 'hidden'
									}`}
									onClick={() => {
										setShow(false);
									}}
								/>
							</nav>
							<div
								className={`sm:flex md:flex-row md:static md:-translate-x-0 gap-5 ${
									show
										? 'flex z-20 items-center absolute bottom-52 left-2/4 flex-col -translate-x-1/2 '
										: 'hidden'
								}`}
							>
								<Link href='/add-order'>
									<div
										className={` sm:flex px-5 py-2.5 text-md font-medium text-gray-900 bg-teal-500 rounded-md shadow cursor-pointer hover:bg-teal-300 transition-all duration-500 ${
											show ? 'flex z-20' : 'hidden'
										}`}
									>
										Dodaj zlecenie
									</div>
								</Link>
								{!props.isLogged && (
									<Link href='/sign-in'>
										<div
											className={`sm:block px-4 py-2 text-md font-medium text-teal-700 bg-gray-200 rounded-md cursor-pointer ${
												show ? ' text-center z-20' : 'hidden'
											}`}
										>
											Zaloguj
										</div>
									</Link>
								)}
								{props.isLogged && (
									<>
										{/* <div
											className={`sm:block px-4 py-2 text-md font-medium text-teal-700 bg-teal-100 rounded-md cursor-pointer ${
												show ? ' text-center z-20' : 'hidden'
											}`}
										>
											Wyloguj
										</div> */}
										<div
											style={{
												backgroundImage: `url("https://images.unsplash.com/photo-1667055595941-e88993dd1346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")`,
												backgroundRepeat: 'no-repeat',
												backgroundPosition: 'center',
												backgroundSize: 'cover',
											}}
											className={`flex w-11 h-11 rounded-2xl border-teal-500 border-2 cursor-pointer hover:border-red-400 transition-all duration-300 hover:border-[3px]`}
										/>
									</>
								)}
							</div>
							<div className='block md:hidden'>
								<button className='pl-5 pt-2 text-gray-200 transition hover:text-gray-200/75'>
									<BsThreeDots size={30} onClick={showBurger} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Nav;

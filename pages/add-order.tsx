import Image from 'next/image';
import { useFormik } from 'formik';

import Layout from '../components/layout';

import image from '../image/dawn-on-sea.jpg';

function AddOrder() {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			description: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Layout>
			<div className='flex flex-col items-center gap-3 text-gray-200'>
				<div className='flex w-full'>
					<div
						className='w-1/2 h-[93vh]'
						style={{
							background: `url(${image.src}) 70% 50% no-repeat`,
							backgroundSize: 'cover',
						}}
					/>

					<div className='w-1/2 px-10'>
						<h1 className='pt-8 pb-4 text-5xl'>
							Dodaj nowe zlecenie<span className='text-blue-600'>.</span>
						</h1>
						<p className='text-sm pb-6 text-gray-300'>
							Tutaj możesz dodać nowe zlecenie
						</p>
						<form
							method='POST'
							className='flex flex-col gap-2'
							onSubmit={(e) => {
								e.preventDefault();
								formik.handleSubmit(e);
							}}
						>
							<div className='relative'>
								<input
									className='block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
									placeholder=' '
									id='firstName'
									type='text'
									name='firstName'
									onChange={formik.handleChange}
									value={formik.values.firstName}
								/>
								<label
									htmlFor='firstName'
									className='absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#040005] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
								>
									Imię
								</label>
							</div>
							<div className='relative'>
								<input
									className='block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
									placeholder=' '
									type='text'
									id='lastName'
									name='lastName'
									onChange={formik.handleChange}
									value={formik.values.lastName}
								/>
								<label
									htmlFor='lastName'
									className='absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#040005] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
								>
									Nazwisko
								</label>
							</div>
							<div className='relative'>
								<input
									className='block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
									placeholder=' '
									type='text'
									id='email'
									name='email'
									onChange={formik.handleChange}
									value={formik.values.email}
								/>
								<label
									htmlFor='email'
									className='absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#040005] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
								>
									E-mail
								</label>
							</div>
							<div className='relative'>
								<textarea
									className='block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
									placeholder=' '
									name='description'
									id='description'
									cols={30}
									rows={10}
									onChange={formik.handleChange}
									value={formik.values.description}
								/>
								<label
									htmlFor='description'
									className='absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-[#040005] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
								>
									Opis
								</label>
							</div>
							<button
								type='submit'
								className='w-min border-2 border-gray-600 mx-auto my-2 py-2 px-3  rounded-lg hover:bg-slate-900 hover:scale-110 hover:border-blue-500 hover:text-blue-500 transition-all'
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default AddOrder;

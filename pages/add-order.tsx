import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import useGetInputs from '../hooks/useGetInputs';

import Layout from '../components/layout';

import image from '../image/dawn-on-sea.jpg';

function AddOrder() {
	const [isSubmitted, setIsSubmitted] = useState(0);
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			description: '',
			date: '',
		},
		onSubmit: async (values) => {
			// po każdym zatwierdzeniu dodaje 1 do state'a
			setIsSubmitted((prev) => prev + 1);

			descriptionRef.current!.value === ''
				? (descriptionRef.current!.style.borderColor = 'rgb(239 68 68)')
				: (descriptionRef.current!.style.borderColor = '');

			// mapuje przez każdy klucz w obiekcie values jeśli wystąpi string => '' to zwraca false, a jeśli nie to true. Potem sprawdzamy czy false występuje i zwracamy jego index
			const isValuesTrue = () =>
				Object.entries(values)
					.map(([key, value]) => (value === '' ? false : true))
					.indexOf(false);

			if (isValuesTrue() < 0) {
				const response = await fetch('/api/new-order', {
					method: 'POST',
					body: JSON.stringify(values),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const data = await response.json();

				alert('Dodano nowe zadanie!');
				// alert(JSON.stringify(values, null, 2));
			} else {
				alert('Wypełnij wszystkie pola!');
			}
		},
	});

	const inputs = useGetInputs(formik, isSubmitted);

	const descriptionRef = useRef<HTMLTextAreaElement>(null);

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
							Dodaj nowe zlecenie<span className='text-blue-600 '>.</span>
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
							{/* inputy zmapowane z hooka */}
							{inputs}

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
									ref={descriptionRef}
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

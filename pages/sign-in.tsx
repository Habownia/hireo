import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import { GiNinjaHeroicStance } from 'react-icons/gi';

import Input from '../components/Input';
import Layout from '../components/layout';

function SignIn() {
	const [isSubmitted, setIsSubmitted] = useState(0);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		onSubmit: (values) => {
			setIsSubmitted((prev) => prev + 1);

			const isValuesTrue = () =>
				Object.entries(values)
					.map(([key, value]) => (value === '' ? false : true))
					.indexOf(false);

			if (isValuesTrue() < 0) {
				// const response = await fetch('/api/new-order', {
				// 	method: 'POST',
				// 	body: JSON.stringify(values),
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	},
				// });
				// const data = await response.json();

				alert('Zalogowano!');
				alert(JSON.stringify(values, null, 2));
				router.push('/');
			} else {
				alert('Wypełnij wszystkie pola!');
			}
			router.push('/logged');
		},
	});

	return (
		<Layout isLogged={false}>
			<div className='text-gray-50 flex gap-6 flex-col items-center justify-between mt-[25vh]'>
				<GiNinjaHeroicStance
					size={50}
					className='pb-1'
					color='rgb(59 130 246)'
				/>
				<h1 className='text-2xl'>Zaloguj się</h1>
				<form
					method='POST'
					className='flex flex-col gap-2 w-72'
					onSubmit={(e) => {
						e.preventDefault();
						formik.handleSubmit(e);
					}}
				>
					<Input
						content='Login'
						type='text'
						id='login'
						handleChange={formik.handleChange}
						value={formik.values.login}
						submit={isSubmitted}
					/>
					<Input
						content='Hasło'
						type='password'
						id='password'
						handleChange={formik.handleChange}
						value={formik.values.password}
						submit={isSubmitted}
					/>

					<button
						type='submit'
						className='border-2 border-gray-600 mx-auto my-2 py-2 px-3  rounded-lg hover:bg-slate-900 hover:scale-110 hover:border-blue-500 hover:text-blue-500 transition-all'
					>
						Sign In
					</button>
				</form>
			</div>
		</Layout>
	);
}

export default SignIn;

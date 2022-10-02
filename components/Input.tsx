import { useRef, useEffect } from 'react';

function Input(props: any) {
	const reference = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// sprawdza czy style istnieją i czy submit był klinkięty więcej niż 1 raz
		if (reference.current?.style && props.submit >= 1) {
			reference.current.value === ''
				? (reference.current.style.borderColor = 'rgb(239 68 68)')
				: (reference.current.style.borderColor = '');
		}
		// efekt rerunuje się przy kliknięciu submit lub przy zmianie wartości
	}, [props.submit, props.value]);

	return (
		<div className='relative'>
			<input
				className='block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
				placeholder=' '
				id={props.id}
				type={props.type}
				name={props.id}
				onChange={props.handleChange}
				value={props.value}
				ref={reference}
			/>
			<label
				htmlFor={props.id}
				className='absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#040005] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
			>
				{props.content}
			</label>
		</div>
	);
}

export default Input;

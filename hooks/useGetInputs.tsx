import Input from '../components/Input';

function useGetInputs(formik: any, isSubmitted: number) {
	const inputs = [
		{
			content: 'Imię',
			type: 'text',
			id: 'firstName',
			value: formik.values.firstName,
		},
		{
			content: 'Nazwisko',
			type: 'text',
			id: 'lastName',
			value: formik.values.lastName,
		},
		{
			content: 'E-mail',
			type: 'email',
			id: 'email',
			value: formik.values.email,
		},
		{
			content: 'Data',
			type: 'date',
			id: 'date',
			value: formik.values.date,
		},
	];

	const inputsMapped = inputs.map((elem, index) => (
		<Input
			key={index}
			content={elem.content}
			type={elem.type}
			id={elem.id}
			handleChange={formik.handleChange}
			value={elem.value}
			submit={isSubmitted}
		/>
	));
	return inputsMapped;
}

export default useGetInputs;

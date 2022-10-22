import { useEffect } from 'react';
import { NextPage } from 'next';
import { MongoClient } from 'mongodb';

import Layout from '../components/layout';
import { ReactNode } from 'react';
import { exit } from 'process';

type Data = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	date: string;
	description: string;
};

interface Props {
	orders: {
		[index: number]: Data;
	};
}

// const Callendar: NextPage<Props> = (props) => {
const Callendar = () => {
	const props = {
		orders: [
			{
				_id: null,
				firstName: 'Joe',
				lastName: 'Mama',
				email: 'joe@mama.com',
				description: 'Joe Mama',
				date: '22222-02-22',
				id: '633b2d685f62909e18eaea97',
			},
			{
				_id: null,
				firstName: 'Joe',
				lastName: 'Mama',
				email: 'joe@mama.com',
				description: 'Joe Mama',
				date: '2022-03-25',
				id: '633b2d685f62909e18eaea97',
			},
			{
				_id: null,
				firstName: 'Joe',
				lastName: 'Mama',
				email: 'joe@mama.com',
				description: 'Joe Mama',
				date: '22222-02-24',
				id: '633b2d685f62909e18eaea97',
			},
			{
				_id: null,
				firstName: 'Joe',
				lastName: 'Mama',
				email: 'joe@mama.com',
				description: 'Joe Mama',
				date: '22222-02-25',
				id: '633b2d685f62909e18eaea97',
			},
			{
				_id: null,
				firstName: 'George',
				lastName: 'Mama',
				email: 'george@mama.com',
				description: 'George mama',
				date: '22222-02-23',
				id: '633b2d905f62909e18eaea98',
			},
			{
				_id: null,
				firstName: 'George',
				lastName: 'Mama',
				email: 'george@mama.com',
				description: 'George mama',
				date: '22222-02-23',
				id: '633b2d965f62909e18eaea99',
			},
		],
	};

	// tworzymy unikalny set dat
	const unique = [...new Set(props.orders.map((item) => item.date))].filter(
		(elem) => {
			const date = new Date(elem).getUTCFullYear();
			const actualYear = new Date().getUTCFullYear();
			// sprawdza czy np !(2030 > 2022) i !(1997 < 2022)
			return !(date > actualYear) && !(date < actualYear) ? true : false;
		}
	);

	console.log(unique);

	// sortujemy daty w kolejności rosnącej
	let sortedDates = unique.sort(
		(a, b) => new Date(a).getTime() - new Date(b).getTime()
	);

	const monthsNames = [
		'Styczeń',
		'Luty',
		'Marzec',
		'Kwiecień',
		'Maj',
		'Czerwiec',
		'Lipiec',
		'Sierpień',
		'Wrzesień',
		'Paździenik',
		'Listopad',
		'Grudzień',
	];

	const months: { [key: number]: number[] } = {
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
		9: [],
		10: [],
		11: [],
		12: [],
	};

	// przydzielamy dni z obiektu do tablic miesięcy
	sortedDates.forEach((elem) => {
		// dzielimy datę na części
		const dateChunked = elem.split('-');

		const month = parseInt(dateChunked[1]);
		const day = parseInt(dateChunked[2]);
		// wypychamy do odpowiedniej tablicy
		months[month].push(day);
	});

	const monthsElements = monthsNames.map((elem, index) => {
		const uniqueDays = [...new Set(months[index + 1])].map((elem, index) => (
			<p key={index}>{elem}</p>
		));

		return (
			<div key={index} className='flex flex-col items-center font-jakarta'>
				{/* elem to nazwa miesiąca */}
				<h2 className='text-2xl font-semibold text-gray-200 pb-3'>
					{/* {elem} */}
					{`${index + 1}. ${elem}`}
				</h2>
				{uniqueDays.length > 0 && (
					<div className='flex flex-col items-center'>
						<p>Zajęte dni:</p>
						<div className='text-md flex gap-3 flex-wrap max-w-xs'>
							{uniqueDays}
						</div>
					</div>
				)}
			</div>
		);
	});

	return (
		<Layout>
			<h1 className='text-3xl font-semibold text-blue-300 flex justify-center py-8'>
				Kalendarz
			</h1>
			<div className='flex gap-12 flex-wrap justify-center'>
				{monthsElements}
			</div>
		</Layout>
	);
};

// export async function getStaticProps() {
// 	const client = await MongoClient.connect(
// 		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@trzycierzbase.3nnsmqr.mongodb.net/orders?retryWrites=true&w=majority`
// 	);
// 	const db = client.db();

// 	const ordersCollection = db.collection('orders');
// 	const orders = await ordersCollection.find().toArray();

// 	client.close();
// 	return {
// 		props: {
// 			orders: orders.map((item) => ({
// 				...item,
// 				id: item._id.toString(),
// 				_id: null,
// 			})),
// 		},
// 		revalidate: 1,
// 	};
// }

export default Callendar;

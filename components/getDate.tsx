// import { useEffect } from 'react';
// import { NextPage } from 'next';
// import { MongoClient } from 'mongodb';

// import Layout from '../components/layout';
// import { ReactNode } from 'react';

// type Data = {
// 	id: string;
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	date: string;
// 	description: string;
// };

// interface Props {
// 	orders: {
// 		[index: number]: Data;
// 	};
// }

// // const Callendar: NextPage<Props> = (props) => {
const GetDate = () => {
	// 	const props = {
	// 		orders: [
	// 			{
	// 				_id: null,
	// 				firstName: 'Joe',
	// 				lastName: 'Mama',
	// 				email: 'joe@mama.com',
	// 				description: 'Joe Mama',
	// 				date: '22222-02-22',
	// 				id: '633b2d685f62909e18eaea97',
	// 			},
	// 			{
	// 				_id: null,
	// 				firstName: 'George',
	// 				lastName: 'Mama',
	// 				email: 'george@mama.com',
	// 				description: 'George mama',
	// 				date: '22222-02-23',
	// 				id: '633b2d905f62909e18eaea98',
	// 			},
	// 			{
	// 				_id: null,
	// 				firstName: 'George',
	// 				lastName: 'Mama',
	// 				email: 'george@mama.com',
	// 				description: 'George mama',
	// 				date: '22222-02-23',
	// 				id: '633b2d965f62909e18eaea99',
	// 			},
	// 		],
	// 	};
	// 	const monthsNames = [
	// 		'Styczeń',
	// 		'Luty',
	// 		'Marzec',
	// 		'Kwiecień',
	// 		'Maj',
	// 		'Czerwiec',
	// 		'Lipiec',
	// 		'Sierpień',
	// 		'Wrzesień',
	// 		'Paździenik',
	// 		'Listopad',
	// 		'Grudzień',
	// 	];
	// 	const months: { [key: number]: ReactNode[] } = {
	// 		1: [],
	// 		2: [],
	// 		3: [],
	// 		4: [],
	// 		5: [],
	// 		6: [],
	// 		7: [],
	// 		8: [],
	// 		9: [],
	// 		10: [],
	// 		11: [],
	// 		12: [],
	// 	};
	// 	const allOrders = props.orders.forEach((elem) => {
	// 		// dzielimy datę na części
	// 		const dateChunked = elem.date.split('-');
	// 		// tworzymy z części obiekt
	// 		const date = {
	// 			day: dateChunked[2],
	// 			month: parseInt(dateChunked[1]),
	// 			year: dateChunked[0],
	// 		};
	// 		months[date.month as keyof typeof months].push(
	// 			<div key={elem.id}>
	// 				<p>Dzień: {date.day}</p>
	// 				{/* <p>Miesiąc: {monthsNames[date.month - 1]}</p> */}
	// 				{/* <p>Rok: {date.year}</p> */}
	// 			</div>
	// 		);
	// 	});
	// 	const monthsElements = monthsNames.map((elem, index) => {
	// 		return (
	// 			<div key={index} className='flex flex-col items-center'>
	// 				<h2 className='text-xl'>{elem}</h2>
	// 				{months[index + 1].length > 0 && <p>Zajęte dni:</p>}
	// 				<div className='text-md flex'>{months[index + 1]}</div>
	// 			</div>
	// 		);
	// 	});
	// 	return (
	// 		<Layout>
	// 			<h1 className='text-2xl flex justify-center p-3'>Kalendarz</h1>
	// 			<div className='flex flex-col items-center'>{monthsElements}</div>
	// 			{/* <div>{allOrders}</div> */}
	// 		</Layout>
	// 	);
};

// // export async function getStaticProps() {
// // 	const client = await MongoClient.connect(
// // 		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@trzycierzbase.3nnsmqr.mongodb.net/orders?retryWrites=true&w=majority`
// // 	);
// // 	const db = client.db();

// // 	const ordersCollection = db.collection('orders');
// // 	const orders = await ordersCollection.find().toArray();

// // 	client.close();
// // 	return {
// // 		props: {
// // 			orders: orders.map((item) => ({
// // 				...item,
// // 				id: item._id.toString(),
// // 				_id: null,
// // 			})),
// // 		},
// // 		revalidate: 1,
// // 	};
// // }

export default GetDate;

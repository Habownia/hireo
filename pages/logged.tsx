import { NextPage } from 'next';
import { MongoClient } from 'mongodb';

import Layout from '../components/layout';

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
		[x: string]: any;
		[index: number]: Data;
	};
}

const Logged: NextPage<Props> = (props) => {
	// sortowanie zleceń
	props.orders.sort(
		(a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);

	const orders: any = props.orders.map((elem: Data) => {
		console.log(elem.date);

		return (
			<div key={elem.id}>
				<div className='flex gap-1'>
					<p>{elem.firstName}</p>
					<p>{elem.lastName}</p>
				</div>
				<p>
					<span className='font-bold text-teal-300'>Email: </span>
					{elem.email}
				</p>
				<p>
					<span className='font-bold text-teal-300'>Data wykonania: </span>
					{elem.date}
				</p>
				<p>
					<span className='font-bold text-teal-300'>Opis: </span>
					{elem.description}
				</p>
			</div>
		);
	});

	return (
		<Layout isLogged={true}>
			<div className='flex items-center flex-col'>
				<h1 className='my-8 text-3xl font-semibold'>Wszystkie zamówienia</h1>
				<div className='flex gap-5'>{orders}</div>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	// const client = await MongoClient.connect(
	// 	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@trzycierzbase.3nnsmqr.mongodb.net/orders?retryWrites=true&w=majority`
	// );
	// const db = client.db();

	// const ordersCollection = db.collection('orders');
	// const orders = await ordersCollection.find().toArray();

	// client.close();
	// return {
	// 	props: {
	// 		orders: orders.map((item) => ({
	// 			...item,
	// 			id: item._id.toString(),
	// 			_id: null,
	// 		})),
	// 	},
	// 	revalidate: 1,
	// };
	return {
		props: {
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
				{
					_id: null,
					firstName: 'Mirosław',
					lastName: 'Krzysztof',
					email: 'wahile3294@24rumen.com',
					description: "Joe mama's",
					date: '2022-12-22',
					id: '635820986dc69f22245f3fa9',
				},
				{
					_id: null,
					firstName: 'Jan',
					lastName: 'Nowak',
					email: 'aaa@aaaa.aa',
					description: 'Damn',
					date: '2022-03-12',
					id: '635829826dc69f22245f3faa',
				},
				{
					_id: null,
					firstName: 'Grzegorz',
					lastName: 'Kowalski',
					email: 'aaa@aaaa.aa',
					description: 'Damn',
					date: '2022-12-22',
					id: '63582fc26dc69f22245f3fab',
				},
			],
		},
		revalidate: 1,
	};
}

export default Logged;

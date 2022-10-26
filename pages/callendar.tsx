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
		map(arg: (item: Data) => string): Iterable<unknown> | null | undefined;
		[index: number]: Data;
	};
}

const Callendar: NextPage<Props> = (props) => {
	// tworzymy unikalny set dat
	const unique = [
		...new Set(props.orders.map((item: Data) => item.date)),
	].filter((elem: any) => {
		const date = new Date(elem).getUTCFullYear();
		const actualYear = new Date().getUTCFullYear();
		// sprawdza czy np !(2030 > 2022) i !(1997 < 2022)
		return !(date > actualYear) && !(date < actualYear) ? true : false;
	});

	// sortujemy daty w kolejności rosnącej
	let sortedDates = unique.sort(
		(a: any, b: any) => new Date(a).getTime() - new Date(b).getTime()
	);

	// unique => sortedDates => months => monthNames + monthElements

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
	sortedDates.forEach((elem: any) => {
		// dzielimy datę na części
		const dateChunked = elem.split('-');

		const month = parseInt(dateChunked[1]);
		const day = parseInt(dateChunked[2]);
		// wypychamy do odpowiedniej tablicy
		months[month].push(day);
	});

	const monthsElements = monthsNames.map((monthName, index) => {
		const daysInMonth = months[index + 1].map((day, index) => (
			<p key={index}>{day}</p>
		));

		return (
			<div key={index} className='flex flex-col items-center font-jakarta'>
				<h2 className='text-2xl font-semibold text-gray-200 pb-3'>
					{/* {monthName} */}
					{`${index + 1}. ${monthName}`}
				</h2>
				{daysInMonth.length > 0 && (
					<div className='flex flex-col items-center'>
						<p>Zajęte dni:</p>
						<div className='text-md flex gap-3 flex-wrap max-w-xs'>
							{daysInMonth}
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

export async function getStaticProps() {
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@trzycierzbase.3nnsmqr.mongodb.net/orders?retryWrites=true&w=majority`
	);
	const db = client.db();

	const ordersCollection = db.collection('orders');
	const orders = await ordersCollection.find().toArray();

	client.close();
	return {
		props: {
			orders: orders.map((item) => ({
				...item,
				id: item._id.toString(),
				_id: null,
			})),
		},
		revalidate: 1,
	};
}

export default Callendar;

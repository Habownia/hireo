// import { MongoClient } from 'mongodb';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	firstName: string;
	lastName: string;
	email: string;
	description: string;
	date: string;
};

// async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
// 	if (req.method === 'POST') {
// 		const data = req.body;

// 		const client = await MongoClient.connect(
// 			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@trzycierzbase.3nnsmqr.mongodb.net/orders?retryWrites=true&w=majority`
// 		);
// 		const db = client.db();
// 		const ordersCollection = db.collection('orders');
// 		const result = await ordersCollection.insertOne(data);

// 		client.close();

// 		res.status(201).json({ message: 'Order insterted' });
// 	}
// }

// export default handler;

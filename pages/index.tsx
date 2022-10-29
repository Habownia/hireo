import type { NextPage } from 'next';
import Hero from '../components/Hero';

import Layout from '../components/layout';

const Home: NextPage = () => {
	return (
		<Layout isLogged={false}>
			<Hero />
		</Layout>
	);
};

export default Home;

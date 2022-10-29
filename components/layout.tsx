import Nav from './Nav';
import SEO from './seo';

function Layout(props: { children: any; isLogged: boolean }) {
	return (
		<>
			<SEO />
			<Nav isLogged={props.isLogged} />
			<main className='text-gray-100'>{props.children}</main>
		</>
	);
}

export default Layout;

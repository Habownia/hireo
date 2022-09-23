import Nav from './Nav';
import SEO from './seo';

function Layout(props: { children: any }) {
	return (
		<>
			<SEO />
			<Nav />
			<main className=' bg-slate-700'>{props.children}</main>
		</>
	);
}

export default Layout;

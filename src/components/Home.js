import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
	const { error, isPending, data: blogs } = useFetch('http://localhost:5000/blogs');

	return (
		<div className='home'>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			<h1>All Blogs!</h1>
			{blogs && <BlogList blogs={blogs} />}
		</div>
	);
};

export default Home;

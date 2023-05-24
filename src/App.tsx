import { useEffect } from 'react';
import { useCounterStore } from './store/counterStore';
import shallow from 'zustand/shallow';

function App() {
	const { title, count, posts } = useCounterStore(
		state => ({
			count: state.count,
			title: state.title,
			posts: state.posts,
		}),
		shallow
	);
	const { increment, getPosts, clearStore, multiply } = useCounterStore();

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div>
			<h1>Counter: {count}</h1>
			<h2>{title}</h2>
			<button onClick={() => increment(10)}>Incrementar</button>
			<button onClick={() => clearStore()}>Clear</button>
			<button onClick={() => multiply(2)}>Multiply</button>
			<hr />

			{JSON.stringify(posts)}
		</div>
	);
}

export default App;

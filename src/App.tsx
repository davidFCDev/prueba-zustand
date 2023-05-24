import { useCounterStore } from './store/counterStore';
import shallow from 'zustand/shallow'

function App() {
	const { title, count } = useCounterStore(state => ({
		count: state.count,
		title: state.title,
	}), shallow);

	return (
		<div>
			<h1>Counter: {count}</h1>
			<h2>{title}</h2>
		</div>
	);
}

export default App;

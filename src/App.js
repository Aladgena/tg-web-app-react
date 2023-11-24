import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
const {user, onClose} = useTelegram()

function App() {
	const {onToggleButton, tg} = useTelegram()

	useEffect( () => {
		tg.ready()
	})
  return (
    <div className="App">
			<Header />
			<button onClick={onToggleButton}>Toggle</button>

    </div>
  );
}

export default App;

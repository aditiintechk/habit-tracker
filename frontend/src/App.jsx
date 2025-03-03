import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [message, setMessage] = useState('')

	useEffect(() => {
		fetch('/api')
			.then((response) => response.json())
			.then((data) => setMessage(data.message))
	})
	return (
		<>
			<h1>{message || 'Loading...'}</h1>
		</>
	)
}

export default App

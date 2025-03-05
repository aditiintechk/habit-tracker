import { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom'

export default function Home() {
	const [message, setMessage] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		fetch('/api')
			.then((response) => response.json())
			.then((data) => setMessage(data.message))
	})
	return (
		<>
			<h1>{message || 'Loading...'}</h1>
			<button onClick={() => navigate('/login')}>Login</button>
			<button onClick={() => navigate('/register')}>Register</button>
		</>
	)
}

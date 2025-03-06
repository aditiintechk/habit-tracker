import { useState } from 'react'

export default function Register() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	async function handleSubmit(e) {
		e.preventDefault()
		// send a post request to the backend
		try {
			const response = await fetch('http://localhost:5000/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			const data = await response.json()
			if (response.ok) console.log('login successful', data)
			else console.log('login failed')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					id='password'
					value={formData.password}
					onChange={handleChange}
					required
				/>

				<button>Submit</button>
			</form>
		</div>
	)
}

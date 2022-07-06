import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewUser } from './registerSlice';
import "./Register.css"

function Register() {

	const [name, setName] = useState('')
	const [pseudo, setPseudo] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState('')
	const [sex, setSex] = useState('H')
	const [password, setPassword] = useState('')
	const [confirm, setConfirm] = useState('')

	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		console.log(name, pseudo, email, age, sex, password, confirm)
		dispatch(addNewUser({name, pseudo, email, age, sex, password}))
		setName('')
		setPseudo('')
		setEmail('')
		setAge('')
		setPassword('')
		setConfirm('')
	}

	return (
		<>
		<div className=''>
			<div className='d-flex justify-content-center mt-5'>
				<div classeName='title'>
				<form onSubmit={(e) => handleSubmit(e)}>
					

				<h2>Register</h2>

					<div>
						<label htmlFor='name'>Name :</label>
						<input
							type='text'
							name='name'
							placeholder='name'
							value={name}
							onChange={e => setName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor='pseudo'>Prenom :</label>
						<input
							type='text'
							name='pseudo'
							value={pseudo}
							placeholder='pseudo'
							onChange={e => setPseudo(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor='email'>Email :</label>
						<input 
							type='email'
							name='email'
							value={email}
							// pattern=".+@globex\.com"
							size="30"
							placeholder='email'
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor='age'>Age :</label>
						<input
							type='date'
							name='age'
							value={age}
							onChange={e => setAge(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor='sex'>Homme</label>
						<input
							type='radio'
							name='sex'
							value='H'
							onChange={e => setSex(e.target.value)}
							checked
						/>
						<label htmlFor='sex'>Femme</label>
						<input
							type='radio'
							name='sex'
							value='F'
							onChange={e => setSex(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password : (8 characters minimum):</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={e=>setPassword(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="confirm">Confirmer :</label>
						<input
							type="password"
							name="confirm"
							value={confirm}
							onChange={e=>setConfirm(e.target.value)}
							required
						/>
					</div>
					<div>
						<button>Register</button>
					</div>
						<Link to='login'>Login</Link>
					


				
				</form>
				</div>
			</div>

		</div>
		</>
	)
}

export default Register
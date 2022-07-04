import React ,{ useState ,useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allusers, showUser } from '../Register/registerSlice';
import View from './View';





function Login() {

	
	const [flag, setFlag] = useState(false);
	
	const all = useSelector(allusers)
	const dispatch = useDispatch()

	const content = (flag)?(all.map(item => <View key={item.id} user={item}/>)):('error')
	console.log(content)
	const handleSubmit = e=>{

		e.preventDefault()
		setFlag(true)
		dispatch(showUser())
		
	}

	return (
		<div className='row'>
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className='title'>
				<h2>Login</h2>
			</div>
			
			
			<div>
				<button >Login</button>
			</div>
			<Link to='/'>Register</Link>
			
		</form>
		<div>
			{content}
		</div>
	</div>		
	)
}

export default Login
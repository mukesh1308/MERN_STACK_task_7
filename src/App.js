import './App.css';
import React,{useState} from 'react';


function App() {
	const [name,setName]=useState("Mukesh Kumar");
  	return (
    	<div className='app'>
			<div className='name'>
				<h1>Hi my Name is {name}</h1>
				<button onClick={()=>setName("sathya")}>sathya</button>
				<button onClick={()=>setName("avinesh")}>avinesh</button>
				<button onClick={()=>setName("vijay babu")}>vijay</button>
			</div>
    	</div>
  	);
}

export default App;

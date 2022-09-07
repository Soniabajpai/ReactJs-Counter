import React from 'react';
import {useState} from 'react';
import '../Components/Counter.css';
function Counter(){

let count = 0;
const [currentstate,updatedstate] = useState(count);

const handleClick =()=>{
updatedstate(currentstate+1);
}

	return(
<>
<div className="counter-div">
<h2 className="title">Counter</h2>
<button onClick={handleClick}>{currentstate}</button>
</div>
</>
		);
}

export default Counter;
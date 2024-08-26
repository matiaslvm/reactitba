import React from 'react'

export const Counter = (props) => {
    
return ( 
    <div>
        <button onClick={props.updateCount}>  
            HACE Click, {props.nombre} 
        </button>
    </div>  
);
};
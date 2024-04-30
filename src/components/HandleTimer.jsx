import React,{useEffect, useState} from 'react'

function HandleTimer() {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
       
        const delayInMillis = 3000;
        const timeoutId = setTimeout(delayedFunction, delayInMillis);
    
        return () => clearTimeout(timeoutId);
      }, []); 
    
  return (
    <div>
      
    </div>
  )
}

export default HandleTimer

import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);
    const TeamStyle ={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px',
        backgroundColor:'yellow',
        spaceX:'10px'
    }
    const handleAdd = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove =()=>{
        const newTeam = team -1;
        setTeam(newTeam);
    }
    return(
        <div style={TeamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd} style={{backgroundColor: 'purple'}}>Add</button>
            <button onClick={handleRemove} style={{backgroundColor: 'purple'}}>Remove</button>
        </div>
    )
}

/**Effects----------->
 * 
 *  1. Rendering code :top level component props, transform ND RETURN THE JSX TO SCREEN
 *  2. Event handler: might update an input field , submit an HTTP POST request to buy a product or another screen navigate
 * 
 */

/**
 * Side effect --> when even handler calls from outside the component
 */

/**
 * Setting up a server connection is a effect
 */

/**
 * Side effect in <react---> </react--->
 *  -> unpredictable
 *  -> Action perform outside the world
 *  ->  component rendering and side effect logic are independent
 * -> to handle side effect ---> use effect
 */

/**
 *  API for request from backend data, 
 *  to interact with browser api --> manipulating dom clearly
 *  setTimeout(), setInterval()
 *  reading data from local storage
 */

/**
 *  1. declare an effect
 *  2. specify the effect of the dependency
 *  3. add clean up if needed 
 */

/**
      useEffect(()=>{

      }, [a,b])
 */

      /**
       * cleanup function=>
       *   to return something fro use effect function 
       *   garbage can leak memory or new value can conflict with garbage value and so need to cleanup
       *  
       */
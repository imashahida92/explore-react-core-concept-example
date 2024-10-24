import { useEffect, useState } from "react"

export default function Users (){
    const [users, setUsers] = useState([]); // user api is a array so default value is []
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])     // useEffect(call back function, [dependency])
    return(
        <div>
            <h3>Total number of User : {users.length} </h3>
        </div>
    )
}
/**
 * 1. declare to state hold the data
 * 2. use effect with call back and dependency array
 * 3. use fetch to load data
 */
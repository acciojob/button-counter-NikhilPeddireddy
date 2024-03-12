import { useState } from "react";

export default function Counter(){
    const[Count,setCount]=useState(0);
    function incCount(){
        setCount(Count+1);
    }
    return(<diV>
        <p>Button Clicked {Count} Times</p>
        <button onClick={incCount}>Click Me</button>
    </diV>)
}
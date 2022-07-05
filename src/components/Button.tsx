// type ButtonProps = {
//     text?: string;
//     number?: number;
//     children?: string;
// }

import { useState } from "react"

export function Button(){

    let [counter, setCounter] = useState(0)

    function increment(){
        if(counter < 10){
            setCounter(counter + 1)
        }
    }


    return (
        <button onClick={increment}>{counter}</button>
    )

}

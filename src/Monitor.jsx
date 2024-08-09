import "./Monitor.scss"
import { UserContext } from "./App"
import { useContext } from "react"

function Monitor(){
    
    const user = useContext(UserContext)
    const [inputValue, setInputValue] = user
    return(
        <div className="monitor">
                <h1>{inputValue}</h1>
        </div>
    )
}

export default Monitor
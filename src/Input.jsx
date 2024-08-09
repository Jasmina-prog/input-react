import { useContext } from "react"
import "./Input.scss"
import { UserContext } from "./App"
function Input(){
    const user = useContext(UserContext)
    const [inputValue, setInputValue] = user
    return(
        <>
        <input type="text" onChange={(e)=>{
            setInputValue(e.target.value)
            console.log(e.target.value);
        }}/>
        </>
    )
}

export default Input
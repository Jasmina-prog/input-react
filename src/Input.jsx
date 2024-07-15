import "./Input.scss"

function Input(props){
    return(
        <>
        <input type="text" onChange={(e)=>{
            props.setState(e.target.value)
        }}/>
        </>
    )
}

export default Input
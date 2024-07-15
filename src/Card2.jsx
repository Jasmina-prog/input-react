import "./Card2.scss"
import Input from "./Input"
import Monitor from "./Monitor"

function Card2(props){
    return(
        <div className="card2">
            <Input setState={props.setState}/>
            <Monitor state={props.state} setState={props.setState}/>
        </div>
    )
}

export default Card2
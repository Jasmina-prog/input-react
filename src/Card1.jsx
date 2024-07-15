
import "./Card1.scss"
import Card2 from "./Card2"
import Input from "./Input"

function Card1(props){

    
    return(
        <div className="card1">
        <Input setState={props.setState}/>
        <Card2 state={props.state} setState={props.setState}/>
        </div>
    )
}

export default Card1
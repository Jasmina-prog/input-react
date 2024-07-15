import "./Monitor.scss"

function Monitor(props){
    return(
        <div className="monitor">
                <h1>{props.state}</h1>
        </div>
    )
}

export default Monitor
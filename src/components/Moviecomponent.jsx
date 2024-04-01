
function Moviecomponent(props){
    // eslint-disable-next-line react/prop-types
    return <div><h1>Move</h1><p>{props.name}</p><p>{props.author}</p><p>{props.year}</p><p>{props.studio}</p><img src={props.poster}/>

    </div>
}

export default Moviecomponent
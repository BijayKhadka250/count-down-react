

function Child(props){
    console.log("props",props);
 return (
    <h1>The time is {props.timeString}!</h1>
 )
}

export default Child
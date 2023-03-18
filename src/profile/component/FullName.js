const FullName =(props)=>{
return(
    <div>
    <h1>  {props.firstName} {props.lastName}</h1>
 
<button onClick={()=>props.handleClick(props.firstName)}>User</button>
 </div>
)

}

export default FullName
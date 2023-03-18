const Bio =(props)=>{
return(
    <div >
            
            <div >
            <h1 >Age:</h1> {props.Age} 
            
            <h1 >Bio:</h1>My name is {props.FullName} I has {props.Age} years old
            </div>
            </div>
)
}

export default Bio


import './App.css';
import Bio from './profile/component/bio';
import FullName from './profile/component/FullName';
import Profession from './profile/component/Profession';

function App() {
  const handleClick =(name) => {
    
    alert(name);}
  return (
    <div className="App">
      <header >
        <div style={{border:'3px', color:'orange',paddingTop:'120px'}} >
< div  style={{ color:'red'}}>      
<Bio FullName="amira" Age="28"/>
</div>
<FullName style={{color:'red'}} firstName="amira" lastName="manai" handleClick={handleClick} />
<Profession />
</div>

      </header>
    </div>
  );
}

export default App;

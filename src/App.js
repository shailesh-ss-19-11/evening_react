import Counter from './components/Counter';
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar'
function App() {
  const name = "rutika"


  const hello = ()=>{
    alert("function call through props");
  }
  return (
   <div>
    <Navbar/>
    <Counter/>
    
    <HomeComponent 
    name={name} 
    age={23}
    info={{address:"ngp",country:"INDIA"}} 
    hobbies={["swimming","riverRafting","skydyving","trekking"]}
    hellofunction = {hello}
    />
   </div>
  );
}

export default App;

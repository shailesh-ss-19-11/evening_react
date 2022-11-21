import Counter from './components/Counter';
import AddUser from './components/FormUsingClass';
import AddUserFunction from './components/FormUsingFunction';
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar'
import UserData from './components/Userdata';
function App() {
const login =false

  const hello = () => {
    alert("function call through props");
  }
  
  return (
    <div>
      <Navbar />
      {/* <div className='container'>
        {
          login ? <AddUser /> : <AddUserFunction/>
        }
      </div> */}

      {/* <Counter/> */}

      {/* <HomeComponent 
    name={name} 
    age={23}
    info={{address:"ngp",country:"INDIA"}} 
    hobbies={["swimming","riverRafting","skydyving","trekking"]}
    hellofunction = {hello}
    /> */}


    <UserData/>
    </div>
  );
}

export default App;

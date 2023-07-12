import logo from './logo.svg';
import './App.css';
import Table from './Components/table';

function App() {


  let arr=[{
    name:'',
    weight:'',
    skills:'',
    education:'',
    
  }]

  return (
     <div>
      <Table data={arr}/>
    </div>
  );
}

export default App;

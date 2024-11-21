// import ListGroups from './components/ListGroup';
// import Button from './components/Button';
// import Alert from './components/Alert';
// import { useState } from 'react';
import './App.css';
import Like from './components/Like';


function App() {
// let names = ["krishna","Naman","harshit","shivam","Reena"]

// const handleSelectName = (name: String) =>{console.log(name)};
// const [alertVisible,setAlertVisible] = useState(false);
  return (
    <div>
      {/* <h1><ListGroups names={names} heading="Names" onSelectName={handleSelectName}/></h1> */}
      {/* <Alert childern = "hello"/> */}
      {/* <Alert>
        Hello<b>Krishna</b>
      </Alert> */}
      {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)} >Alert</Alert>}
      <Button color="success" onClick={() => setAlertVisible(true)}>
        say hello
      </Button> */}
      <Like onClick={() => console.log("Clicked")}/>
    </div>
  );
}

export default App;


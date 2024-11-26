// import ListGroups from './components/ListGroup';
// import Button from './components/Button';
// import Alert from './components/Alert';
// import { useState } from 'react';
// import Like from './components/Like';
import './App.css';
import ExpandableText from './components/ExpandableText';


// function App() {
// // let names = ["krishna","Naman","harshit","shivam","Reena"]

// // const handleSelectName = (name: String) =>{console.log(name)};
// // const [alertVisible,setAlertVisible] = useState(false);
//   return (
//     <div>
//       {/* <h1><ListGroups names={names} heading="Names" onSelectName={handleSelectName}/></h1> */}
//       {/* <Alert childern = "hello"/> */}
//       {/* <Alert>
//         Hello<b>Krishna</b>
//       </Alert> */}
//       {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)} >Alert</Alert>}
//       <Button color="success" onClick={() => setAlertVisible(true)}>
//         say hello
//       </Button> */}
//       <Like onClick={() => console.log("Clicked")}/>
//     </div>
//   );
// }


function App() {

  return (  
    <div>
      <ExpandableText>
        Hello Krishna
      </ExpandableText>
    </div>
  );
}

export default App;


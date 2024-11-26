import { useState } from 'react'
import './App.css'
// import NavBar from './NavBar'
// import Cart from './Cart';

function App() {
  // const [game, setGame] = useState({
  //   id:1,
  //   player:{
  //     name:"Player1",
  //   }
  // })

  // const handleClick =() =>{
  //   setGame({
  //     ...game,
  //     player:{
  //       ...game.player,
  //       name:"Krishna",
  //     }
  //   })
  // }


  const [cart, setCart] = useState({
    discount : .1,
    items:[
      {id:1,title:'product1',quantity:1},
      {id:2,title:'product2',quantity:1},
    ]
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map(item => item.id === 1 ? {...item,quantity:item.quantity+1}:item)
    })
  };

  // const [cartItem,setCartItem] = useState(["item1","item2","item3"]);
  return(
    <>
    {/* <NavBar cartItemsCount={cartItem.length}/>
    <Cart cartItems={cartItem} onClear={()=>setCartItem([])}/> */}
    <div>
      <ul>
        {/* {game.player.name} */}
        {}
      </ul>
    </div>
    <button onClick={handleClick}>Add</button>
    </>
  )
}

export default App

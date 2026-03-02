// import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import FoodItems from './Components/FoodItems';
import Error from './Components/Error';

function App() {
  
// let foodItems = [];

// let foodItems = ['Dal' , 'Green Vegetable', 'Roti', 'Salad ', 'Milk','Ghee'];

// let emptyMessage = foodItems.length===0 ?  <h3>I am still hungry</h3> : null;

// if(foodItems.length===0){
//   return <h3>I am still hungry</h3>
// }

  return  (
//  <React.Fragment>
<>
  <h1>Healthy Food</h1>

{/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}

  {/* { emptyMessage } */}
  
<FoodItems></FoodItems>
<Error items={FoodItems}></Error>
    
     </>
  // </React.Fragment>
  );
}

export default App

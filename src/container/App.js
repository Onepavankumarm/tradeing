// import React from "react"
// import './App.css';
// import axios from 'axios'
// import Header from "../components/Header";
// import List from "../components/List";
// import DetailList from "../components/DetailList"

// function App() {
//   const [list, setList] = React.useState([]);
//   const [filterVal, setFilterVal] = React.useState('');
//   const [searchApiData, setSearchApiData] = React.useState([]);
//   const [detals, setDetals] = React.useState([]);

//   const getStocks = async () => {
//     await axios.get('/v2/tickers?symbols=ALL')
//       .then(function (response) {
//         console.log(response)
//         setList(response.data);
//         setSearchApiData(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   React.useEffect(() => {
//     getStocks()
//   }, [])
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       getStocks()
//     }, 10000);

//     return () => clearInterval(interval);
//   }, [])

//   const searchHandler = (e) => {
//     e.preventDefault();
//     if (e.target.value === undefined) {
//       return
//     }
//     if (e.target.value === '') {
//       setList(searchApiData)
//     } else {
//       let filterResult = searchApiData.filter((item) => item[0].toLowerCase().includes(e.target.value.toLowerCase()))
//       setList(filterResult)
//     }
//     setFilterVal(e.target.value)

//   }

//   const detailsHandler = async (id) => {
//     await axios.get(`/v2/tickers?symbols=${id}`)
//       .then(function (response) {
//         console.log(response)
//         setDetals(response.data[0])
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   return (
//     <div className="App">
//       <div className="container-fluid">
//         <div className="row content">
//           <div className="col-sm-3 sidenav hidden-xs">
//             <Header searchHandler={searchHandler} filterVal={filterVal} />
//             <ul className="nav nav-pills nav-stacked">
//               <List detailsHandler={detailsHandler} list={list} />
//             </ul><br />
//           </div>
//           <br />
//           <div className="col-sm-9">
//             <div className="well">
//               <h4>Dashboard</h4>
//               {detals.length ? (
//                 <DetailList detals={detals} />
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import Main from "../components/Birthday/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Tour/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/DragAndDrop/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Review/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/ChessBoard/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/StopWatch/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Toster/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Main from "../components/PopUp/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Mounting/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import MainSub from "../components/Interview_1/MainSub";
// function App() {
//   return (
//     <div>
//       <MainSub />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/DeBounce/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }
//  export default App

// import React from 'react'
// import Main from "../components/Accordion/Main";
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Interview_2/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/CRUD/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Menu/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Tabs/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Count/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import Mian from "../components/Slider/Mian";

// function App() {
//   return (
//     <div>
//       <Mian />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Song/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Mian from "../components/Propogation/Mian";
// function App() {
//   return (
//     <div>
//       <Mian />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Form/Main";
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/ParaGenenrater/Main";

// function App() {
//   return (
//     <div><Main /></div>
//   )
// }

// export default App

// import React from 'react';
// import Main from '../components/MakeMyTrip/Main';
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/ByJuse/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/APIDEBOUNC/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Mian from "../components/ByJu/Mian"
// function App() {
//   return (
//     <div>
//       <Mian />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/HOC/Main"
// function App() {
//   return (
//     <div><Main /></div>
//   )
// }

// export default App

// import React from 'react'
// import Mian from "../components/RodeSideCoder/ONE/Mian"
// function App() {
//   return (
//     <div>
//       <Mian />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/RodeSideCoder/TWO/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/RodeSideCoder/THREE/Main";
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/TicTok/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from '../components/Interviee_3/Main'
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/Post/Main";
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// testing using jest 

// import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>pavan kumar</h1>
//       <div id="counterval">{count}</div>
//       <button id='incbutton' onClick={() => setCount(c => c + 1)}>Increment</button>
//       <button id='decbutton' onClick={() => setCount(c => c - 1)}>Decrement</button>

//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Parent from "../components/CallBack/Parent";
// export const ThemeContext = React.createContext();

// function App() {
//   return (
//     <ThemeContext.Provider value={"pavan"}>
//       <Parent />
//     </ThemeContext.Provider>
//   )
// }

// export default App

import React from 'react'
import MyFilter from "../components/SearchFilter/MyFilter"
function App() {
  return (
    <div>
      <MyFilter />
    </div>
  )
}

export default App

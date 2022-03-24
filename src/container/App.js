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

// export default App

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

import React from 'react'
import Main from "../components/CRUD/Main"
function App() {
  return (
    <div>
      <Main />
    </div>
  )
}

export default App
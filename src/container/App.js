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

// import React from "react";
// import Main from "../components/Toster/Main";
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

// export default App;

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

//  export default App

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

// import React from 'react'
// import MyFilter from "../components/SearchFilter/MyFilter"
// function App() {
//   return (
//     <div>
//       <MyFilter />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Main from "../components/SearchList/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

// import React from "react";

// const data = [
//   {
//     id: 1,
//     name: "pavan",
//   },
//   {
//     id: 2,
//     name: "kumar",
//   },
//   {
//     id: 3,
//     name: "avinash",
//   },
//   {
//     id: 4,
//     name: "sathis",
//   },
//   {
//     id: 5,
//     name: "jadish",
//   },
// ];
// function App() {
//   const [list, setlist] = React.useState(data);
//   const changeHandler = (e) => {
//     console.log(e.target.value);
//     if (e.target.value !== "") {
//       let filter = list.filter((item) =>
//         item.name.toLowerCase().includes(e.target.value.toLowerCase())
//       );
//       setlist(filter);
//     } else {
//       setlist(data);
//     }
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <div>
//         <input type={"text"} onChange={changeHandler}></input>
//       </div>
//       <div>
//         {list.map((item, i) => (
//           <h1 key={i}>{item.name}</h1>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useCallback } from "react";

// function App() {
//   const [list, setList] = React.useState([
//     {
//       id: 1,
//       name: "pavan",
//     },
//     {
//       id: 2,
//       name: "kumar",
//     },
//     {
//       id: 3,
//       name: "shetty",
//     },
//   ]);
//   const upHandler = useCallback(
//     (id) => {
//       if (id !== 0) {
//         const data = [...list];
//         [data[id], data[id - 1]] = [data[id - 1], data[id]];
//         setList(data);
//       }
//     },
//     [setList, list]
//   );
//   const downHandler = useCallback(
//     (id) => {
//       if (id !== list.length - 1) {
//         const data = [...list];
//         [data[id], data[id + 1]] = [data[id + 1], data[id]];
//         setList(data);
//       }
//     },
//     [setList, list]
//   );
//   return (
//     <div style={{ textAlign: "center" }}>
//       <div>
//         {list.map((item, i) => (
//           <h1
//             style={{
//               background: "green",
//               color: "orange",
//               padding: "10px",
//               margin: "20px",
//             }}
//             key={i}
//           >
//             {item.name}
//             <button onClick={() => upHandler(i)}>Up</button>
//             <button onClick={() => downHandler(i)}>Down</button>
//           </h1>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useCallback } from "react";

// function App() {
//   const [list, setList] = React.useState([
//     { id: 1, value: 0 },
//     { id: 2, value: 0 },
//     { id: 3, value: 0 },
//   ]);
//   const [total, settotal] = React.useState(0)
//   const increment = useCallback(
//     (id) => {
//       let data = [...list];
//       data[id].value = data[id].value + 1;
//       setList(data);
//       totalHandler()
//     },
//     [list, setList]
//   );

//   const decrement = useCallback(
//     (id) => {
//       let data = [...list];
//       if (data[id].value !== 0) data[id].value = data[id].value - 1;
//       setList(data);
//       totalHandler()
//     },
//     [list, setList]
//   );

//   const totalHandler = useCallback(() => {
//     let myfilter = list.map((item) => item.value).reduce((c, t) => c + t, 0);
//     settotal(myfilter)
//   }, [list, settotal])

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Appiness</h1>
//       <div>
//         {list.map((item, i) => {
//           return (
//             <div key={item.id}>
//               {item.value} <button onClick={() => increment(i)}>+</button>
//               <button onClick={() => decrement(i)}>-</button>
//             </div>
//           );
//         })}
//         <h1>Total : {total}</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react'

// function App() {
//   const chagehandler = (e) => {
//     alert(e.target.value)
//   }
//   return (
//     <div>
//       <select onChange={chagehandler}>
//         <option>One</option>
//         <option>Two</option>
//         <option>Three</option>
//       </select>
//     </div>
//   )
// }
//export default App
// import React from 'react'

// function App() {
//   const [count, setCount] = React.useState(0);
//   React.useEffect(() => {
//     var interval = null;
//     interval = setInterval(() => {
//       setCount(c => c + 1)
//     }, 100)
//     return () => {
//       clearInterval(interval);
//     }
//   }, [])

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// function App() {
//   const [list, setList] = React.useState([])
//   let tostProperty = null
//   const changeHandler = (id) => {
//     switch (id) {
//       case 'Sucesss':
//         tostProperty = {
//           text: 'Sucesss',
//           time: 3000,
//           id: 1,
//           background: 'green'
//         }
//         break;
//       case 'Warrning':
//         tostProperty = {
//           text: 'Warrning',
//           time: 3000,
//           id: 2,
//           background: 'orange'
//         }
//         break;
//       case 'Error':
//         tostProperty = {
//           text: 'Error',
//           time: 3000,
//           id: 3,
//           background: 'red'
//         }
//         break;
//       default: tostProperty = []
//     }
//     setList([...list, tostProperty])
//   }

//   const [timer, settimer] = React.useState(0)
//   React.useEffect(() => {
//     if (list.length) {
//       settimer(list[0].time)
//     }
//   }, [list])

//   const deleteHandler = (id) => {
//     let myfilter = list.filter((item) => item.id !== id);
//     setList(myfilter);
//   }
//   React.useEffect(() => {
//     let interval = null
//     if (list.length) {
//       interval = setInterval(() => {
//         deleteHandler(list[0].id);
//         settimer(timer - list[0].time)
//       }, timer);

//     }

//     return () => {
//       clearInterval(interval)
//     }
//   }, [deleteHandler, list, timer])
//   return (
//     <div>
//       <div>
//         <div style={{ margin: 'auto', width: '200px' }}>
//           <button onClick={() => changeHandler('Sucesss')}>Sucesss</button>
//           <button onClick={() => changeHandler('Warrning')}>Warrning</button>
//           <button onClick={() => changeHandler('Error')}>Error</button>
//         </div>

//         <div style={{ position: 'absolute', bottom: '0px', right: '0px' }}>
//           {list.map((item, i) => {
//             return (
//               <div key={i} style={{ borderRadius: '10px', padding: '10px', margin: '20px', width: '300px', height: '100px', display: 'flex', justifyContent: 'space-between', background: `${item.background}` }}>
//                 <span>{item.text}</span><span onClick={() => deleteHandler(item.id)}>X</span>
//               </div>
//             )
//           })}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App

// import React, { useRef } from "react";

// function App() {
//   const first = useRef();
//   const second = useRef()
//   const [list, setlist] = React.useState([
//     "item_1",
//     "item_2",
//     "item_3",
//     "item_4",
//     "item_5",
//   ]);
//   const startDrag = (position) => {
//     first.current = position
//   }
//   const enterDrag = (position) => {
//     second.current = position
//   }
//   const drag = () => {
//     let data = [...list];
//     let findIndex = data[first.current];
//     data.splice(first.current, 1);
//     data.splice(second.current, 0, findIndex);
//     first.current = null;
//     second.current = null;
//     setlist(data)
//   }
//   return (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ background: 'white', margin: '20px' }}>
//         {list.map((item, i) => {
//           return <div
//             draggable
//             onDragStart={() => startDrag(i)}
//             onDragEnter={() => enterDrag(i)}
//             onDragEnd={drag}
//             key={i}
//             style={{ background: 'orange', margin: '10px', padding: '20px' }}
//           >{item}
//           </div>;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react'

// function App() {
//   const [timer, settimer] = React.useState(0);
//   const [active, setActive] = React.useState(false);
//   const [pause, setPause] = React.useState(true);
//   React.useEffect(() => {
//     let interval = null;
//     if (active && pause === false) {

//       interval = setInterval(() => {
//         settimer(c => c + 1)
//       }, 500);
//     }
//     return () => {
//       clearInterval(interval)
//     }
//   }, [active, pause])
//   const startTimer = () => {
//     setActive(true)
//     setPause(false)
//   }
//   const pauseTimer = () => {
//     setPause(!pause)
//   }
// const resetHandler = () =>{
//   setActive(true)
//   settimer(0);
// }
//   return (
//     <div>
//       <h1>Timer Maga : {timer}</h1>
//       <button onClick={startTimer}>start</button>
//       <button onClick={pauseTimer}>pause</button>
//       <button onClick={resetHandler}>reset</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// function computatheResult(square) {
//   let resultpattern = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7]
//   ]
//   for (let i = 0; i < resultpattern.length; i++) {
//     const [a, b, c] = resultpattern[i];
//     if (square[a] && square[a] === square[b] && square[a] === square[c]) {
//       return square[a]
//     }
//   }
//   return null
// }

// function App() {
//   const [square, setSquare] = React.useState(Array(9).fill(null));
//   const [xis, setXis] = React.useState(false);
//   const clickHandler = (id) => {
//     if (square[id] || computatheResult(square)) {
//       return
//     }
//     square[id] = xis ? 'X' : 'O';
//     setSquare(square);
//     setXis(!xis)
//   }
//   let winner = computatheResult(square);
//   let status = null;
//   if (winner) {
//     status = "winner"
//   } else {
//     status = "winner" + (xis ? 'X' : 'O');
//   }
//   const resetHandler = () => {
//     setSquare(Array(9).fill(null))
//     setXis(false)
//   }
//   return (
//     <div>
//       <h1>Tick Tok</h1>
//       <div style={{ display: 'flex' }}>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(0)}>{square[0]}</button>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(1)}>{square[1]}</button>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(2)}>{square[2]}</button>
//       </div>
//       <div style={{ display: 'flex' }}>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(3)}>{square[3]}</button>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(4)}>{square[4]}</button>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(5)}>{square[5]}</button>
//       </div>
//       <div style={{ display: 'flex' }}>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(6)}>{square[6]}</button>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(7)}>{square[7]}</button>
//         <button style={{ float: 'left', width: '80px', height: '80px', fontSize: '20px' }} onClick={() => clickHandler(8)}>{square[8]}</button>
//       </div>
//       <h1>Total:{status}</h1>
//       <button onClick={resetHandler}>Reset</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Carousel from 'react-elastic-carousel';
// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
// ];
// function App() {
//   return (
//     <div>
//       <br></br>
//       <Carousel itemsToShow={3} pagination={true} showArrows={false} breakPoints={breakPoints}>
//         <div style={{ width: '100%', height: '200px', background: 'green', margin: '2px' }}>1</div>
//         <div style={{ width: '100%', height: '200px', background: 'green', margin: '2px' }}>1</div>
//         <div style={{ width: '100%', height: '200px', background: 'green', margin: '2px' }}>1</div>
//       </Carousel>
//     </div>
//   )
// }

// export default App

// import React from "react";
// import explore from "./data";
// import Folder from "./Folder"
// console.log(explore);
// function App() {
//   console.log(explore);
//   return <div>
//     <Folder explore={explore}/>
//   </div>;
// }

// export default App;

// import React from 'react'
// import Demo from './Demo'
// function App() {
//   const [count, setCount] = React.useState(0)
//   return (
//     <div>
//       {/* <Demo count={count} ></Demo> */}
//       <button onClick={()=>setCount(c=>c+1)}>incrememnt</button>
//     </div>
//   )
// }

// export default App

// import React from "react";

// function App() {
//   const [first, setfirst] = React.useState(0);
//   function debouncing(cb, d) {
//     let timer;
//     return (...args) => {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         cb(...args);
//       }, d);
//     };
//   }
//   const changeHandler = debouncing((e) => {
//     console.log(e.target.value);
//   }, 1000);

//   function throlling(func, delay) {
//     let prev = 0;
//     return (...args) => {
//       let now = new Date().getTime();
//       if (now - prev > delay) {
//         prev = now;
//         return func(...args);
//       }
//     };
//   }
//   const changHandler = throlling(() => {
//     console.log("hello");
//   }, 1000);
//   return (
//     <div>
//       <input type={"text"} onChange={changeHandler}></input>
//       <button onClick={changHandler}>click</button>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   function debouncing(cb, d) {
//     let timer;
//     return (...args) => {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         cb(...args);
//       }, d);
//     };
//   }
//   const changeHandler = debouncing((e) => {
//     console.log(e.target.value);
//   }, 1000);

//   function throttling(func, delay) {
//     let prev = 0;
//     return (...args) => {
//       let now = new Date().getTime();
//       if (now - prev > delay) {
//         prev = now;
//         return func(...args);
//       }
//     };
//   }
//   const clickHandler = throttling(() => {
//     console.log("click hNaler");
//   }, 1000);
//   return (
//     <div>
//       <input type={"text"} onChange={changeHandler} />
//       <button onClick={clickHandler}>click maga</button>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css"
// function App() {
//   return (
//     <div>
//       <div className="main">
//         <div className="manSub">
//           <div className="manSubone"></div>
//           <div className="manSubTwo">
//             <div className="mainmain">
//             <div className="manSubTwoSub">1</div>
//             <div className="manSubTwoSub">1</div>
//             <div className="manSubTwoSub">1</div>
//             <div className="manSubTwoSub">1</div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Main from "../Practices/Chess/Main";
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Main from "../Practices/NavBar/Main"
// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App
// import React from "react";
// import Main from "../Practices/tickTok/Main";
// function App() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <Main />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [list, setlist] = useState([
//     {
//       title: "A message to our customer",
//       upvotes: 12,
//       date: "2020-01-24",
//     },
//     {
//       title: "alphabet earning",
//       upvotes: 22,
//       date: "2019-11-23",
//     },
//     {
//       title: "artificial mounting",
//       upvotes: 2,
//       date: "2019-11-22",
//     },
//     {
//       title: "whats sap",
//       upvotes: 1,
//       date: "2019-11-21",
//     },
//     {
//       title: "the emu war",
//       upvotes: 24,
//       date: "2019-11-21",
//     },
//   ]);
//   const [mylist, setmylist] = useState(
//     list.sort((a, b) => (b.upvotes - a.upvotes))
//   );
//   const sortHandlertbyUpvote = () => {
//     let data = [...list];
//     let finaldata = data.sort((a, b) => a.upvotes - b.upvotes);
//     setmylist(finaldata);
//   };
//   const sortbyDateMaga = () => {
//     let data = [...list];
//     let finaldat = data.sort(function (a, b) {
//       var dateA = new Date(a.date),
//         dateB = new Date(b.date);
//       return dateA - dateB;
//     });
//     setmylist(finaldat);
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={sortHandlertbyUpvote}>sort by upvotes</button>
//         <button onClick={sortbyDateMaga}>sort by date</button>
//       </div>
//       <div>
//         {mylist.map((item, i) => {
//           return (
//             <div
//               key={i}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 margin: "30px",
//               }}
//             >
//               <div>{item.title}</div>
//               <div style={{ float: "right" }}>{item.upvotes}</div>
//               <div> {item.date}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { async } from "rxjs";

// let url = "https://jsonplaceholder.typicode.com/users";

// function App() {
//   const [list, setlist] = useState([]);
//   const [first, setfirst] = useState("");
//   const fetchData = async () => {
//     let responce = await fetch(url);
//     let data = await responce.json();

//     setlist(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const dataHandlert = async (id) => {
//     let responce = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     let data = await responce.json();
//     setfirst(data);
//   };
//   return (
//     <div>
//       <div>
//         {list.map((item) => {
//           return (
//             <li key={item.id} onClick={() => dataHandlert(item.id)}>
//               {item.name}
//             </li>
//           );
//         })}
//       </div>
//       <div>
//         {first !== "" ? (
//           <div>
//             <h1>{first.id}</h1>
//             <h2>{first.username}</h2>
//             <h3>{first.phone}</h3>
//             <h4>{first.website}</h4>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [list, setlist] = useState([
//     {
//       title: "A message to our customer  1",
//       upvotes: 12,
//       date: "2020-01-24",
//     },
//     {
//       title: "alphabet earning 2",
//       upvotes: 22,
//       date: "2019-11-23",
//     },
//     {
//       title: "artificial mounting 3",
//       upvotes: 2,
//       date: "2019-11-22",
//     },
//     {
//       title: "whats sap 4",
//       upvotes: 1,
//       date: "2019-11-21",
//     },
//     {
//       title: "the emu war 5",
//       upvotes: 24,
//       date: "2019-11-21",
//     },
//   ]);
//   const [count, setCount] = useState(0);
//   const nextHandler = () => {
//     if (list.length - 1 !== count) {
//       setCount((c) => c + 1);
//     }
//     console.log(count);
//   };
//   const prevhandler = () => {
//     if (count > 0) {
//       setCount((c) => c - 1);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={() => setCount(0)}>reset</button>
//         <button onClick={prevhandler} disabled={count === 0}>
//           prev
//         </button>
//         <button onClick={nextHandler} disabled={count === list.length - 1}>
//           next
//         </button>
//       </div>
//       <div>
//         <h1>{list[count].title}</h1>
//         <h1>{list[count].upvotes}</h1>
//         <h1>{list[count].date}</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React, { useState, useEffect } from "react";

// function App() {
//   const [name, setname] = useState("");
//   const [list, setlist] = useState([]);
//   const fetchDate = async () => {
//     if(name!=='undefine'&&name!==""){
//       let responce = await fetch(
//         `https://www.omdbapi.com/?apikey=9946a5a3&?&s=${name}&?t=${name}`
//       );
//       let data = await responce.json();
//      setlist(data.Search);
//       console.log(data.Search);
//     }

//   };
//   const magaHandledube = () => {
//     fetchDate();
//   };
//   console.log(list.length);
//   return (
//     <div>
//       <div>
//         <input type={"text"} onChange={(e) => setname(e.target.value)} />
//         <button onClick={magaHandledube}>click Maga</button>
//       </div>
//       <div>
//         {list.length!==0 && (
//           <div>
//             {list.map((item, i) => {
//               return <div key={i}>{item.Title}</div>;
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [list, setlist] = useState([
//     {
//       id: 1,
//       name: "Bertie Yates",
//       age: 29,
//       image:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
//     },
//     {
//       id: 2,
//       name: "Hester Hogan",
//       age: 32,
//       image:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
//     },
//     {
//       id: 3,
//       name: "Larry Little",
//       age: 36,
//       image:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
//     },
//     {
//       id: 4,
//       name: "Sean Walsh",
//       age: 34,
//       image:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
//     },
//     {
//       id: 5,
//       name: "Lola Gardner",
//       age: 29,
//       image:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//     },
//   ]);
//   const searchHandler = (e) => {
//     let data = [...list];
//     let final = data.filter((item) =>
//       item.name.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setlist(final);

//   };
//   return (
//     <div>
//       <div>
//         <input type={"text"} onChange={searchHandler}></input>
//       </div>
//       <div>
//         {list.map((item, i) => {
//           return <div key={i}>{item.name}</div>;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Main from "../TCS/TicTok/TicTok";
// function App() {
//   return (
//     <div>
//       <Main />
//       {/* <h1>Hello</h1> */}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import SubComponent from "./SubComponent"
let Url = "https://randomuser.me/api/";
function App() {
  const [users, setUsers] = useState([]);
  const fetchDataFromUser = async () => {
    let responce = await fetch(Url);
    let data = await responce.json();
    setUsers(data.results);
  };
  useEffect(() => {
    fetchDataFromUser();
  }, []);
  let userDisplay = null;
  function Hello(){
    return <h1>helo</h1>
  }
  userDisplay = (
    <>
      {users.map((item, i) => {
        console.log(item);
        return (
          <div key={i}>
            <h1>Name:{item.name.first}</h1>
            <h1>Email:{item.email}</h1>
          </div>
        );
      })}
    </>
  );
  return (
    <div>
      <h1>Task</h1>
      <div>{userDisplay}</div>
      <SubComponent fetchDataFromUser={fetchDataFromUser}/>
      {Hello}
    </div>
  );
}

export default App;

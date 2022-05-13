import React, { useState } from "react";

function Main() {
  const [list, setlist] = useState([
    {
      value: 0,
      id: 1,
    },
    {
      value: 0,
      id: 2,
    },
    {
      value: 0,
      id: 3,
    },
  ]);
  const [total, settotal] = useState("");
  const increment = (id) => {
    let data = [...list];
    console.log(data[id - 1]);
    data[id - 1].value = data[id - 1].value + 1;
    setlist(data);
    totalCalculater();
  };
  const decrement = (id) => {
    let data = [...list];
    if (data[id - 1].value !== 0) {
      data[id - 1].value = data[id - 1].value - 1;
      setlist(data);
      totalCalculater();
    }
  };
  const totalCalculater = () => {
    let data = [...list];
    let finaldata = data.map((item) => item.value).reduce((c, t) => c + t, 0);
    settotal(finaldata);
  };
  return (
    <div>
      <div>
        {list.map((item, i) => {
          return (
            <div key={i}>
              <h1>{item.value}</h1>
              <button onClick={() => increment(item.id)}>Increment</button>
              <button onClick={() => decrement(item.id)}>Decrement</button>
            </div>
          );
        })}
        <div>{total}</div>
      </div>
    </div>
  );
}

export default Main;
// import React, { Component } from 'react'
// import "./style.css";
// export class Main extends Component {
// state = {
//   data: [
//     { id: 1, value: 0 },
//     { id: 2, value: 0 },
//     { id: 3, value: 0 }
//   ],
//   total: 0
// };

//   incressHandler = (id) => {
//     let finaldata = [...this.state.data]
//     finaldata[id - 1].value = finaldata[id - 1].value + 1
//     console.log(finaldata)
//     this.setState({
//       data: finaldata
//     })
//     this.totalMaga()
//   }
//   decressHandler = (id) => {
//     let finaldata = [...this.state.data]
//     if (finaldata[id - 1].value === 0) {
//       return
//     }
//     finaldata[id - 1].value = finaldata[id - 1].value - 1
//     console.log(finaldata)
//     this.setState({
//       data: finaldata
//     })
//     this.totalMaga()
//   }

//   totalMaga = () => {
//     let data = [...this.state.data]
//     let myfilet = data.map((item) => item.value).reduce((c, t) => c + t, 0);
//     this.setState({
//       total: myfilet
//     })
//   }
//   render() {

//     return (
//       <div className='main'>
//         <div className='mainSub'>
//           <h6><u>Calculater</u></h6>
//           {
//             this.state.data.map((item, i) => {
//               return (
//                 <div className='calculate' key={i}>
//                   <span style={{ padding: '10px' }}>{item.value}</span>
//                   <div>
//                     <button onClick={() => this.incressHandler(item.id)}>+</button>
//                     <button onClick={() => this.decressHandler(item.id)}>-</button>
//                   </div>
//                 </div>
//               )
//             })
//           }
//           <h5>Total : {this.state.total}</h5>
//         </div>
//       </div>
//     )
//   }
// }

// export default Main

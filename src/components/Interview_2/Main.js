import React, { useState } from 'react'

function Main() {
  const [data, setdata] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
  ])
  const [total, setTotal] = useState(0)
  const increment = (id) => {
    let newData = [...data];
    if (newData[id].value !== -1) {
      newData[id].value = newData[id].value + 1;
      setdata(newData)
    }
    totalMaga()
  }
  const decrement = (id) => {
    let newData = [...data];
    if (newData[id].value !== 0) {
      newData[id].value = newData[id].value - 1;
      setdata(newData)
    }
    totalMaga()
  }
  const totalMaga = () => {
    let list = data.map((item) => item.value).reduce((c, t) => c + t, 0);
    setTotal(list)
  }
  return (
    <div style={{ textAlign: 'center' }}>
      {
        data.map((item, i) => {
          return (
            <div key={i}>{item.value} {'  '}<button onClick={() => increment(i)}>+</button>{'  '}<button onClick={() => decrement(i)}>-</button></div>
          )
        })
      }
      <div>
        <h1>Total:{total}</h1>
      </div>
    </div>
  )
}

export default Main
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
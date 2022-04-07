import React, { useState } from 'react'

function MainSub() {
  const [list, setList] = useState(
    [
      {
        Name: 'pavan',
        id: 1
      },
      {
        Name: 'Kumar',
        id: 2
      },
      {
        Name: 'M',
        id: 3
      }
    ]
  )
  const upHandler = (id) => {

    if (id - 1 !== -1) {
      let data = [...list];
      [data[id - 1], data[id]] = [data[id], data[id - 1]]
      setList(data)
    }
  }
  const downHandler = (id) => {
    console.log(list.length - 1 === id)
    if (list.length - 1 !== id) {
      let data = [...list];
      [data[id + 1], data[id]] = [data[id], data[id + 1]]
      setList(data)
    }
  }
  return (
    <div >
      <div>
        {list.map((item, i) => {
          return (
            <div key={i} style={{ margin: '20px', display: 'flex', justifyContent: 'space-between', width: '300px', height: '50px', background: 'orange' }}>
              {item.Name}
              <button onClick={() => upHandler(i)}>Up</button>
              <button onClick={() => downHandler(i)}>Down</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainSub
// import React, { useState } from 'react'

// function MainSub() {
//   const [list, setList] = useState(
//     [
//       {
//         Name: 'pavan',
//         id: 1
//       },
//       {
//         Name: 'Kumar',
//         id: 2
//       },
//       {
//         Name: 'M',
//         id: 3
//       }
//     ]
//   )
//   const upHandler = (id) => {
//     if (id!== 0) {
//       let data = [...list];
//       [data[id], data[id - 1]] = [data[id - 1], data[id]]
//       setList(data)
//     }
//   }
//   const downHandler = (id) => {
//     console.log(list.length-1)
//     console.log(id)
//     if (list.length-1!==id) {
//       let data = [...list];
//       [data[id], data[id + 1]] = [data[id + 1], data[id]]
//       setList(data)
//     }
//   }
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div>
//         {
//           list.map((item, i) => {
//             return (
//               <div key={item.id} style={{ padding: '20px', margin: '10px', height: '100px', width: '300px', background: 'orange', borderRadius: '10px' }}>
//                 <span>{item.Name}</span>
//                 <span style={{ float: 'right' }}>
//                   <button onClick={() => upHandler(i)}>Up</button>{' '}
//                   <button onClick={() => downHandler(i)}>Down</button>{' '}
//                 </span>

//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default MainSub
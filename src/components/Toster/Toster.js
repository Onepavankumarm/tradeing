import React, { useState, useEffect } from "react";

function Toster() {
  const [list, setList] = useState([]);
  const [timer, settimer] = useState();
  let tostProperty = null;
  useEffect(() => {
    if (list.length) {
      settimer(list[0].time);
    }
  }, [list, settimer]);

  const tostHandler = (type) => {
    switch (type) {
      case "Success":
        tostProperty = {
          text: "Success",
          time: 2000,
          id: 1,
          color: "green",
        };
        break;
      case "Warning":
        tostProperty = {
          text: "Warning",
          time: 3000,
          id: 2,
          color: "orange",
        };
        break;
      case "Danger":
        tostProperty = {
          text: "Danger",
          time: 4000,
          id: 3,
          color: "red",
        };
        break;
      default:
        return (tostProperty = []);
    }
    setList([...list, tostProperty]);
  };
  console.log(list);
  const deleteHandler = (id) => {
    let finalData = list.filter((item) => item.id !== id);
    setList(finalData);
  };
  useEffect(() => {
    let interval = null;
    if (list.length) {
      interval = setInterval(() => {
        deleteHandler(list[0].id);
        settimer(timer - list[0].time);
      }, timer);
    }

    return () => {
      clearInterval(interval);
    };
  }, [list, deleteHandler, settimer]);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <button onClick={() => tostHandler("Success")}>Success</button>
        <button onClick={() => tostHandler("Warning")}>Warning</button>
        <button onClick={() => tostHandler("Danger")}>Danger</button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
      >
        {list.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                width: "300px",
                height: "100px",
                display: "flex",
                justifyContent: "space-between",
                background: `${item.color}`,
                margin: "10px",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <span>{item.text}</span>
              <span onClick={() => deleteHandler(item.id)}>X</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Toster;

// import React, { useState, useEffect } from 'react'

// function Toster() {
//     const [list, setList] = useState([]);
//     const [time, setTime] = useState()
//     var tostProperty = null;
//     const tostHandler = (type) => {
//         switch (type) {
//             case 'Succcess':
//                 tostProperty = {
//                     id: 1,
//                     color: 'green',
//                     text: 'success',
//                     time: 4000
//                 }
//                 break;
//             case 'Warning':
//                 tostProperty = {
//                     id: 2,
//                     color: 'orange',
//                     text: 'Warning',
//                     time: 4000
//                 }
//                 break;
//             case 'Error':
//                 tostProperty = {
//                     id: 3,
//                     color: 'red',
//                     text: 'Error',
//                     time: 4000
//                 }
//                 break;
//             default: tostProperty = [];

//         }
//         setList([...list, tostProperty])
//     }
//     const deleteHandler = (id) => {
//         const fliterItem = list.filter((item) => item.id !== id);
//         setList(fliterItem)
//     }
//     useEffect(() => {

//         if (list.length) {
//             setTime(list[0].time);
//         }

//     }, [list])

//     useEffect(() => {

//         let interval = null;
//         if (list.length) {
//             interval = setInterval(() => {
//                 deleteHandler(list[0].id)
//                 setTime(time - list[0].time)
//             }, time)
//         }

//         return () => {
//             clearInterval(interval)
//         }
//     }, [deleteHandler, time, setList, list])
//     return (
//         <div>
//             <div>
//                 <button className='btn' onClick={() => tostHandler('Succcess')}>Succcess</button>
//                 <button className='btn' onClick={() => tostHandler('Warning')}>Warning</button>
//                 <button className='btn' onClick={() => tostHandler('Error')}>Error</button>
//             </div>
//             <div className='tostBox'>
//                 {
//                     list.map((item) => {
//                         return (
//                             <div key={item.id} className='itemBox' style={{ background: `${item.color}` }}>
//                                 <span>{item.text}</span>
//                                 <span onClick={() => deleteHandler(item.id)}>X</span>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Toster

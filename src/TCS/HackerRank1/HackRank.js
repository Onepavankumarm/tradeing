import React, { useState } from "react";
import "./style.css";
function HackRank() {
  const [list, setlist] = useState([
    {
      title: "A message to our customer  1",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "alphabet earning 2",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "artificial mounting 3",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "whats sap 4",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "the emu war 5",
      upvotes: 24,
      date: "2019-11-21",
    },
  ]);

  const [myList, setmyList] = useState(
    list.sort((a, b) => b.upvotes - a.upvotes)
  );

  const resetHandler = () => {
    setmyList(list.sort((a, b) => b.upvotes - a.upvotes));
  };
  const upvotesHandler = () => {
    let list = [...myList];
    let finalresult = list.sort((a, b) => a.upvotes - b.upvotes);
    setmyList(finalresult);
  };
  const dataHandler = () => {
    let list = [...myList];
    let myResult = list.sort(function (a, b) {
      let dataA = new Date(a.date),
        dataB = new Date(b.date);
      return dataA - dataB;
    });
    setmyList(myResult);
  };
  return (
    <div>
      <div className="main">
        <button onClick={resetHandler}>Reset</button>
        <button onClick={upvotesHandler}>upvotes</button>
        <button onClick={dataHandler}>date</button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>upvotes</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {myList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.upvotes}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HackRank;
// import React, { useState } from "react";
// import "./style.css";
// function HackRank() {
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
//   const [myList, setmyList] = useState(
//     list.sort((a, b) => b.upvotes - a.upvotes)
//   );
//   console.log(myList);
//   const resetHandler = () => {
//     let data = [...list];
//     let finaldata = data.sort((a, b) => b.upvotes - a.upvotes);
//     setmyList(finaldata);
//   };
//   const upvotesHandler = () => {
//     let data = [...myList];
//     let finaldata = data.sort((a, b) => a.upvotes - b.upvotes);
//     setmyList(finaldata);
//   };
//   const dataHandler = () => {
//     let data = [...myList];
//     let finaldata = data.sort(function (a, b) {
//       let dataA = new Date(a.date),
//         dataB = new Date(b.date);
//       return dataA - dataB;
//     });
//     setmyList(finaldata);
//   };
//   return (
//     <div className="main">
//       <button onClick={resetHandler}>Reset</button>
//       <button onClick={upvotesHandler}>upvotes</button>
//       <button onClick={dataHandler}>date</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>upvotes</th>
//             <th>date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {myList.map((item, i) => {
//             return (
//               <tr key={i}>
//                 <td>{item.title}</td>
//                 <td>{item.upvotes}</td>
//                 <td>{item.date}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default HackRank;

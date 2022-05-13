// import React, { useState } from "react";
// import ChildMaga from "./ChildMaga";
// function Main() {
//   const [list, setList] = useState([
//     {
//       name: "pavan",
//       profile: "web developer",
//     },
//     {
//       name: "kumar",
//       profile: "web developer",
//     },
//     {
//       name: "shetty",
//       profile: "web developer",
//     },
//   ]);
//   const [showMaga, setshowMaga] = useState(true);
//   const [fname, setFname] = useState("");
//   let display = (
//     <>
//       {list.map((item, i) => {
//         return (
//           <div key={i}>
//             <h1>{item.name}</h1>
//             <p>{item.profile}</p>
//           </div>
//         );
//       })}
//     </>
//   );
//   console.log(fname);
//   const changeMaga = () => {
//     alert("maga come on");
//   };

//   const [name, setname] = useState("hellpavan hhow are");
//   const changeHandler = (ID) => {
//     setname(ID);
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <div>{display}</div>
//       <button onClick={() => setshowMaga(!showMaga)}>Toggle</button>
//       {showMaga && <div>Hello pavan</div>}
//       <div>
//         <input
//           type={"text"}
//           value={fname}
//           onChange={(e) => setFname(e.target.value)}
//         />
//         <button disabled={fname.length < 1} onClick={changeMaga}>
//           Clickmaga
//         </button>
//         <h2>{fname}</h2>
//         <ChildMaga name={name} changeHandler={changeHandler} />
//       </div>
//     </div>
//   );
// }

// export default Main;

// import React, { useState } from "react";

// function Main() {
//   const [first, setfirst] = useState();
//   const [second, setsecond] = useState();
//   const [total, setTotal] = useState(0);
//   const totalHandler = () => {
//     let cal = first + second;

//     setTotal(cal);
//   };
//   return (
//     <div>
//       <input
//         type={"number"}
//         onChange={(e) => setfirst(parseInt(e.target.value))}
//       />
//       <input
//         type={"number"}
//         onChange={(e) => setsecond(parseInt(e.target.value))}
//       />
//       <button onClick={totalHandler}>calaculate</button>
//       <h1>Total:{total}</h1>
//     </div>
//   );
// }

// export default Main;

// import React, { useState } from "react";

// function Main() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount((c) => c + 1)}>increment</button>
//       <button onClick={() => setCount((c) => c - 1)}>decrement</button>
//     </div>
//   );
// }

// export default Main;

import React, { useState, useEffect } from "react";

function Main() {
  let url = "https://jsonplaceholder.typicode.com/users";
  const [post, setPost] = useState([]);
  const fetchData = async () => {
    let responce = await fetch(url);
    let jsonData = await responce.json();
    setPost(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Display List</h1>
      <div>
        {post.map((item, i) => {
          return <div key={i}>{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Main;

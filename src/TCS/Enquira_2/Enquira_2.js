import React, { useState } from "react";

function Enquira_2() {
  const [first, setfirst] = useState([
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
  const [total, settotal] = useState(0);
  const incressMaga = (id) => {
    let data = [...first];
    console.log(data[id]);
    data[id - 1].value = data[id - 1].value + 1;
    setfirst(data);
    totalHandler();
  };
  const decressMaga = (id) => {
    let data = [...first];
      console.log(data[id - 1].value!==0)
      if(data[id - 1].value!==0){
        data[id - 1].value = data[id - 1].value - 1;
        setfirst(data);
        totalHandler();
      }
      
    
  };
  const totalHandler = () => {
    let data = [...first];
    let result = data.map((item) => item.value).reduce((c, t) => c + t, 0);
    settotal(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Enquira_2 </h1>
      <div>
        {first.map((item, i) => {
          return (
            <div key={i}>
              <span>{item.value}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => incressMaga(item.id)}>Incress</button>
              <button onClick={() => decressMaga(item.id)}>decress</button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Total : {total}</h1>
      </div>
    </div>
  );
}

export default Enquira_2;

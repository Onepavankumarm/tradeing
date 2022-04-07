import React, { useState, useRef } from 'react'

function Main() {
    const first = useRef();
    const second = useRef();
    const [list, setList] = useState(['item1', 'item2', 'item3', 'item4', 'item5']);
    const dragstart = (e, position) => {
        first.current = position;
    }
    const dragEnter = (e, position) => {
        second.current = position;
    }
    const drag = () => {
        let data = [...list];
        let findIndex = data[first.current];
        data.splice(first.current, 1);
        data.splice(second.current, 0, findIndex);
        first.current = null;
        second.current = null;
        setList(data)
    }
    return (
        <div>
            {
                list && list.map((item, index) => (
                    <div
                        draggable
                        onDragStart={(e) => dragstart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drag}
                        key={index}
                        style={{ background: 'orange', margin: '30px', padding: '30px' }}
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    )
}

export default Main

// import React, { useState, useRef } from 'react'

// function Main() {
//     const start = useRef();
//     const end = useRef();
//     const [item, setItem] = useState(['item1', 'item2', 'item3', 'item4', 'item5']);
//     const dragstart = (e, position) => {
//         start.current = position;
//     }
//     const dragEntered = (e, position) => {
//         end.current = position;
//     }
//     const drop = () => {
//         const data = [...item];
//         let findIndex = data[start.current];
//         data.splice(start.current, 1);
//         data.splice(end.current, 0, findIndex);
//         start.current = null;
//         end.current = null;
//         setItem(data)
//     }
//     return (
//         <div>
//             {item && item.map((item, index) => (
//                 <div
//                     key={index}
//                     draggable
//                     onDragStart={(e) => dragstart(e, index)}
//                     onDragEnter={(e) => dragEntered(e, index)}
//                     onDragEnd={drop}
//                     style={{ background: 'green', padding: '10px', margin: '20px' }}
//                 >
//                     {item}
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Main
// import React, { useState } from "react";
// import "./style.css";
// function PopUp() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="main">
//       <div className="box_1">
//         <button onClick={() => setShow(!show)}>ClickMaga</button>
//       </div>
//       {show && (
//         <div className="box_2">
//           <button onClick={() => setShow(false)}>close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PopUp;
// import React, { useState } from 'react'
// import "./style.css"
// function PopUp() {
//     const [show, setShow] = useState(false)
//     return (
//         <div className='main'>
//             <main className='mainBox'>
//                 <h1>Hello pavan preparation</h1>
//                 <button onClick={() => setShow(!show)}>popUp</button>
//             </main>
//             {show && (<div className='popupmaga'>
//                 <h1>popup maga</h1><h1 onClick={() => setShow(false)}>X</h1>
//             </div>)}

//         </div>
//     )
// }

// export default PopUp

// import React, { useState } from 'react'

// function PopUp() {
//     const [show, setShow] = useState(false)
//     return (
//         <>
//             <main className='PopboxHub'>
//                 <h1>Pavan PopUp</h1>
//                 <button className='PopUpBox' onClick={() => setShow(!show)} >PopUp</button>
//             </main>
//             <div className='popupMaga' style={{ display: `${show ? 'block' : 'none'}` }}>
//                 <span className='poptext'>Pavan popUp</span>
//                 <span className='cancel' onClick={() => setShow(false)}>X</span>
//             </div>
//         </>
//     )
// }

// export default PopUp

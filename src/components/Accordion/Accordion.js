import React, { useState } from 'react'
import questions from "./Data";
import SingleQuestion from "./SingleQuestion";
function Accordion() {
    const [list, setList] = useState(questions);
    const [show, setShow] = useState(false)
    console.log(list);
    return (
        <div className='Accordion_card'>
            {
                list.map((item, i) => {
                 return (
                        <SingleQuestion key={item.id} {...item}></SingleQuestion>

                    )
                })
            }

        </div>
    )
}

export default Accordion
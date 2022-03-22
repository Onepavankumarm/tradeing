import React from 'react'
import propTypes from 'prop-types';

function List({ list, detailsHandler }) {
    return list.map((item, i) => {
        return (
            <li key={i}>
                <div onClick={() => detailsHandler(item[0])} className="list-box">
                    <span>
                        <p>{item[0]}</p>
                        <p>Vol:{item[2]}</p>
                    </span>
                    <span>
                        <p>${item[1]}</p>
                        <p>{item[6]}$</p>
                    </span>
                </div>
            </li>
        )
    })
}
List.propTypes = {
    detailsHandler: propTypes.func.isRequired,
    list: propTypes.array,
}
export default React.memo(List)
import React from 'react'
import PropTypes from 'prop-types';

function DetailList({ detals }) {
    return (
        <React.Fragment>
            <h4>{detals[0]}</h4>
            <p>{detals[1]}&nbsp;&nbsp;{detals[6] ? `${detals[6]}$` : ''}</p>
            <hr></hr>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>HIGH</th>
                        <th>LOW</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${detals[2]}</td>
                        <td>${detals[4]}</td>
                        <td>{detals[9]}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}
DetailList.propTypes = {
    detals: PropTypes.array,
}
export default React.memo(DetailList)
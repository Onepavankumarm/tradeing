import React from 'react'
import PropTypes from 'prop-types';
function Header({ searchHandler, filterVal }) {
    return (
        <React.Fragment>
            <h2>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" value={filterVal} placeholder="Search" onChange={(e) => searchHandler(e)} />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="button" disabled>
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </h2>
        </React.Fragment>
    )
}
Header.propTypes = {
    searchHandler: PropTypes.func,
    filterVal: PropTypes.string,
}
export default React.memo(Header)
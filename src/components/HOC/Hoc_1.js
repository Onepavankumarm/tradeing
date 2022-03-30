import React, { Component } from 'react'
import Hoc from "./Hoc";
class Hoc_1 extends Component {
    render() {
        return (
            <div>
                <h2>Hoc_1  {this.props.count}</h2>
                <button onClick={this.props.incress}>count</button>
            </div>
        )
    }
}

export default Hoc(Hoc_1)
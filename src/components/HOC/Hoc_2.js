import React, { Component } from 'react'
import Hoc from "./Hoc";
export class Hoc_2 extends Component {
    render() {
        return (
            <div>
                <h2>Hoc_2 {this.props.count}</h2>
                <button onClick={this.props.incress}>count</button>
            </div>
        )
    }
}

export default Hoc(Hoc_2);
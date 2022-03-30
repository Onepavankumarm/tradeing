import React from 'react'

const Hoc = (NewUPdate) => {
    class NewComponent extends React.Component {
        state = {
            count: 0
        }
        incress = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            return <NewUPdate name="pavan" count={this.state.count} incress={this.incress} />
        }
    }
    return NewComponent
}

export default Hoc
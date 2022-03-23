import { compose } from 'msw'
import React, { useEffect } from 'react'

function Mount(props) {
    useEffect(() => {
        console.log(" un mounting")

        return () => {
            console.log("unmounting")
        }
    }, [props.count])

    return (
        <div>{props.count}</div>
    )
}

export default Mount

// import React, { Component } from 'react'

// export class Mount extends Component {
//     componentDidMount() {
//         console.log("start mounting Hoooo.....")
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.count !== this.props.count) {
//             console.log("start updateing Hoooo.....")
//         }
//     }
//     componentWillUnmount() {
//         console.log("start unmounting.....")
//     }
//     render() {
//         return (
//             <div>{this.props.count}</div>
//         )
//     }
// }

// export default Mount
// import React, { Component } from 'react'

// class Sub extends Component {
//   componentDidMount() {
//     console.log("component did mount");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.count !== this.props.count) {
//       console.log("component did update");
//     }
//   }
//   componentWillUnmount() {
//     console.log("component will un mount");
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.props.count}</h1>
//       </div>
//     )
//   }
// }

// export default Sub

import React, { useEffect } from 'react'

function Sub({ count }) {
  useEffect(() => {
    console.log("component did mount and update");
    return () => {
      console.log("component will uncmount");
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Sub
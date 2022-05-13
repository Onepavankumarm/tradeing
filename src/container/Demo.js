import React from "react";

function Demo({ count }) {
  React.useEffect(() => {
    console.log("component did update");

    return () => {
      console.log("unmount")
    };
  }, [count]);

  return <div>{count}</div>;
}

export default Demo;

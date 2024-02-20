import { memo} from "react";

function Callback1(count) {

    console.log("***");
  return (
    <>
      <p>{count}</p>
    </>
  )
}

export default memo(Callback1);
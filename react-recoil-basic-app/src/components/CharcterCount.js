import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../App";

const CharcterCount = () => {
  const count = useRecoilValue(charCountState);
  <br />;
  return <div>CharcterCount : {count}</div>;
};

export default CharcterCount;

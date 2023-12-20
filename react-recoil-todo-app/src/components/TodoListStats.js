import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../TodoAtom";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items : {totalNum}</li>
      <li>Items Completed : {totalCompletedNum}</li>
      <li>Items not Completed : {totalUncompletedNum}</li>
      <li>Percent COmpleted : {formattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;

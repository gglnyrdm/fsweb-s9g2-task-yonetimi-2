import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import {tr} from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadline = new Date(taskObj.deadline);
  const formatDeadline = formatDistanceToNow(deadline, {addSuffix:true, locale: tr});
  const yakinMiDeadline = differenceInDays(deadline, new Date()) <=3;
  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4	shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1 ">son teslim: {" "}
      <span className= {yakinMiDeadline ? "bg-[#ffd9d4]" : "bg-[#d2d5fd] px-0.5 py-2 rounded-sm inline-block"}>
      {formatDeadline}
      </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block px-1 py-3 text-sm border border-solid border-1 border-ccc mr-1 mb-1.5 rounded-32" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)} className="block px-2 py-3 ml-auto bg-[#fecc91] shadow-md rounded cursor-pointer">Tamamlandı</button>}
    </div>
  );
};

export default Task;

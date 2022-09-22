import React from 'react'

export const TaskRow = ({taskItemTr , toggleTask}) => {
  return (
    <tr>
    <td>
    {taskItemTr.name}
    <input type="checkbox" 
      checked={taskItemTr.done}
      onChange={ () => toggleTask(taskItemTr)}
    />
    </td>
  </tr>
  )
}

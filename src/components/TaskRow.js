import React from 'react'

export const TaskRow = ({taskItemTr , toggleTask}) => {
  return (
    <tr>
    <td className='d-flex justify-content-between' >
    {taskItemTr.name}
    <input type="checkbox" 
      checked={taskItemTr.done}
      onChange={ () => toggleTask(taskItemTr)}
    />
    </td>
  </tr>
  )
}

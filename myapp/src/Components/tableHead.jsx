import React from 'react'

function TableHead({setter1,setter2,setter3,setter4}) {


    

  return (
    <thead >
    <tr>
       <th  scope="col"    onClick={setter1}>Name</th>
       <th scope="col"  onClick={setter2}>Weight</th>
       <th  scope="col"    onClick={setter3}>Skills</th>
       <th scope="col"  onClick={setter4}>Education</th>
       <th scope="col"></th>
    </tr>
</thead>
  )
}

export default TableHead
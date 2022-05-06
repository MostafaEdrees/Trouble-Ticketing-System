import React from 'react'

import { axios } from 'axios';

export default  function AnalysisFeedback() {

async function getTicketData(){
  let {data} = await axios.get('http://localhost:5000/createTicket')
  console.log(data);
}
 
 






  return (
<>
<button onClick={getTicketData}>test</button>
</>
  )
}


 

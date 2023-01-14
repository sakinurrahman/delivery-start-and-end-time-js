 function deliveryBetweenTimes(start,end){
  let today = new Date(); 
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let deliveryStart = new Date(today.getFullYear(),today.getMonth(),today.getDate()+start);
  let deliveryEnd = new Date(today.getFullYear(),today.getMonth(),today.getDate()+end);
  let startDate = deliveryStart.getDate();
  let endDate = deliveryEnd.getDate();

  // Checking if less than 10
  startDate = startDate < 10 ?  '0' + startDate : startDate; 
  endDate = endDate < 10 ? '0' + endDate : endDate; 

  //Outpuut
  let html = `
  Lieferung zwischen 
  <b>${startDate}.
   ${months[deliveryStart.getMonth()]}
   </b> und <b>${endDate}.
   ${months[deliveryEnd.getMonth()]}
   </b>` 
   document.querySelector('.h1').innerHTML = html;
 }
 document.addEventListener('DOMContentLoaded', deliveryBetweenTimes(3,5))

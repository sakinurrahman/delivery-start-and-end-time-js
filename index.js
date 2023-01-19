    function deliveryBetweenDate(){
      // Get month Names 
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      // Assigning Delivery initial and End Date.
      let date = new Date();
      let initialDeliveryDate = new Date(date) ;
       console.log(initialDeliveryDate)
      initialDeliveryDate.setDate(initialDeliveryDate.getDate() + 3);
 console.log(initialDeliveryDate)
      let endDeliveryDate = new Date(date) ;
      endDeliveryDate.setDate(endDeliveryDate.getDate() + 5);
  
      // Chekcing Weekends for initail date
      if ( initialDeliveryDate.getDay() === 0 || initialDeliveryDate.getDay() === 6) {
        if (initialDeliveryDate.getDay() === 6) {
          initialDeliveryDate.setDate(initialDeliveryDate.getDate() + 2)
          endDeliveryDate.setDate(endDeliveryDate.getDate() + 2);
        } else {
          initialDeliveryDate.setDate(initialDeliveryDate.getDate() + 2)
          endDeliveryDate.setDate(endDeliveryDate.getDate() + 2);
        }
      }
     

       // Chekcing Weekends for ending date
       if ( endDeliveryDate.getDay() === 0 || endDeliveryDate.getDay() === 6) {
        if (endDeliveryDate.getDay() === 6) {
          endDeliveryDate.setDate(endDeliveryDate.getDate() + 2)
        } else {
          endDeliveryDate.setDate(endDeliveryDate.getDate() + 2)
        }
      }

      // Getting Delivery Start Date and Month Name
      let FinaldeliverySratDate = initialDeliveryDate.getDate();
      let FinaldeliverySratMonthName = initialDeliveryDate.getMonth();

      // Getting Delivery Start Date and Month Name
      let finalDeliveryEndDate = endDeliveryDate.getDate();
      let finalDeliveryEndMonth = endDeliveryDate.getMonth();



       let html = `
        Lieferung zwischen 
        <b>${FinaldeliverySratDate} ${months[FinaldeliverySratMonthName]}.
         </b> und <b>${finalDeliveryEndDate} ${months[finalDeliveryEndMonth]}.
         </b>` 
         document.querySelector('#delivery_message').innerHTML = html;
    }

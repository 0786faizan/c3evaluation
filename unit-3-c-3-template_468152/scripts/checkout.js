// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


document.querySelector("#confirm").addEventListener("click",checkout());
function checkout(){
  let name = document.getElementById("#user_name").value;
  let seats = document.getElementById("#number_of_seats").value;
  console.log(name);
  console.log(seats);
}
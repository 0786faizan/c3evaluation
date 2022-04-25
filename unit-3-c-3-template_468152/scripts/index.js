// Store the wallet amount to your local storage with key "amount"

document.getElementById("amount");
 function addwallet(){
  
   let h1 = document.getElementById("wallet");
   let wallet1 = document.querySelector("#amount").value;
   if(wallet1 == 100){
       alert("good")
   }
   else{
       alert("keep try")
   }
  h1.append(wallet1);
   document.querySelector("#wallet").append(h1)
  
  
 }

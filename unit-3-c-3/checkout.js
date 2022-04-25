// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let arr = JSON.parse(localStorage.getItem("amount"))
  
let wallet = document.getElementById("wallet").innerText = arr;

let movies = document.getElementById("movie")


  let data = JSON.parse(localStorage.getItem("movie"))
  console.log(data)

  appendData(data)

  function appendData(data){
 
      let div = document.createElement("div")
  
      let img = document.createElement("img")
      img.src = data.Poster
  
      let title = document.createElement("p")
      title.innerText = data.Title 

      div.append(title,img)
      movies.append(div)
  }


  let submit = document.getElementById("confirm").addEventListener("click", ()=>{
    event.preventDefault();
    let seats = document.getElementById("number_of_seats").value;
    let total = +(seats*100)
    let updated_wallet = arr-total


    if(updated_wallet<0){
      alert("Insufficient Balance!")
      document.getElementById("wallet").innerText = arr


    }
    else {
      alert ("Booking successfull!")
    localStorage.setItem("amount", updated_wallet)
    if (updated_wallet<0){
      document.getElementById("wallet").innerText = 0
    }
    else{
      document.getElementById("wallet").innerText = updated_wallet
      }

    }


  })
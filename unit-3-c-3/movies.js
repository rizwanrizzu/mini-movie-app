// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
 
let arr = JSON.parse(localStorage.getItem("amount"))
  
let wallet = document.getElementById("wallet").innerText=arr;

let movies = document.getElementById("movies")

function main() {

  let search = document.getElementById("search").value;

  const url = `https://www.omdbapi.com/?apikey=8154155f&s=${search}`

  fetch(url).then((response) =>{
    return response.json();
  })
  .then((response) =>{
    let data = response.Search
    appendMovie(data)
    console.log(data)
  })
  .catch(function(error){
    console.log("error")
  })

}


function appendMovie(data){

        movies.innerHTML= null
    data.map(element => {
      
    let div = document.createElement("div")
    div.style.border="1px solid black"

    let img = document.createElement("img")
    img.src = element.Poster

    let title = document.createElement("p")
    title.innerText = element.Title 

    let btn = document.createElement("button")
    btn.class ="book_now"
    btn.innerText = "Book Now"

    btn.addEventListener("click",()=>{
        localStorage.setItem("movie",JSON.stringify(element))
        window.location.href="checkout.html"
    })

    div.append(img,title,btn)
    movies.append(div)

    });

}
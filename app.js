const movies = [
    {   
        watched: false,
        title: "The Dark Knight",
        year: 2008,
        country:"USA",
        note:"One of my favourites!",
        actors: ["Christian Bale", "Heath Leadger", "Morgan Freeman"]
    },
    {
        watched: false,
        title: "Inception",
        year: 2010,
        country: "USA",
        note: "Just WOW!",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Tom Hardy"]
    },
    {
        watched: false,
        title: "Gladiator",
        year: 2000,
        country: "USA",
        note: "MAXIMUS DECIMUS MERIDIUS DSALKFADLGJ",
        actors: ["Russell Crowe","Joaquin Phoenix","Connie Nielsen"]
    }
]

function displayMovies(){
  let moviesList = '';
  for(var movie of movies){
moviesList += `<tr id="row-${movies.indexOf(movie)}">
                <td><input type="checkbox" onclick="movieWatched(this, ${movies.indexOf(movie)})" ${movie.watched ? 'checked' : ''}></td>
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.country}</td>
                <td>${movie.note}</td>
                <td>${movie.actors}</td>
              </tr>`
document.getElementById("table_body").innerHTML = moviesList;
}
}

function movieWatched(checkbox, index){
movies[index].watched = checkbox.checked;
var row = document.getElementById(`row-${index}`);
if(movies[index].watched)
row.classList.add("watched");
else
row.classList.remove("watched");
console.log(movies[index].watched);
}

displayMovies();
function movieInputs(){
  return {
    title: document.getElementById("title").value,
    year: document.getElementById("year").value,
    country: document.getElementById("country").value,
    note: document.getElementById("note").value,
    actors: document.getElementById("actors").value.split(",")
  }
  }

function addMovie(){
  let newMovie = movieInputs();
  movies.push(newMovie);
  displayMovies();
  document.getElementById("movie_form").reset();
  document.getElementById("movie_success").innerHTML = "Uspješno dodat film!";
  document.getElementById("movie_success").classList.remove("d-none");
  document.getElementById("movie_success").classList.add("d-block");

  setTimeout(() => { 
    document.getElementById("movie_success").innerHTML = "";
    document.getElementById("movie_success").classList.remove("d-block");
    document.getElementById("movie_success").classList.add("d-none");
  }, 4000);
  

}
const errorTitle = document.getElementById("error-title");
const errorYear = document.getElementById("error-year");
const errorCountry = document.getElementById("error-country")
const errorActors = document.getElementById("error-actors");
const form = document.getElementById("movie_form");
const titleInput = document.getElementById("title");
const yearInput = document.getElementById("year");
const countryInput = document.getElementById("country");
const actorsInput = document.getElementById("actors");

form.addEventListener("submit", (e) => {

  e.preventDefault();
  errorTitle.innerHTML = "";
  errorYear.innerHTML = "";
  errorCountry.innerHTML = "";
  errorActors.innerHTML = "";
  
  if(titleInput.value.length < 1)
  errorTitle.innerHTML = "Naziv filma je obavezan!";

  if(yearInput.value < 1930 || yearInput.value > 2021)
    errorYear.innerHTML = "Godina filma mora biti između 1930. i 2021.!";
  
  if(/\d/.test(countryInput.value) == true)
  errorCountry.innerHTML = "Ovo polje mora da sadrži samo slova!!";

  if(actorsInput.value.length < 1)
  errorActors.innerHTML = "Morate unijeti makar jednog glumca!";
  if(/\d/.test(actorsInput.value) == true)
  errorActors.innerHTML = "Ovo polje mora da sadrži samo slova!";

  if(errorTitle.innerHTML === "" && errorYear.innerHTML === ""  && errorCountry.innerHTML === "" && errorActors.innerHTML === "")
  addMovie();

})


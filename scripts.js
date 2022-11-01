function render() {
 
    var container = document.getElementById('container')
    var url = 'https://api.themoviedb.org/3/search/person?api_key=bb756895ab61d18b38722b3dc1e66185&language=en-US&page=1&include_adult=false&query=harry styles'
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
     
        data.results.forEach((movie) => {
            movie.known_for.forEach((film) =>{

                
                let image = "https://image.tmdb.org/t/p/original/" + film.poster_path

                let card = `<div class="card">
                    <div class="card-image" 
                    style="background-image: url('${image}');"></div>
                    <div class="card-title">
                        ${film.title}
                    </div>
                    <div class="card-description">
                        ${film.overview.slice(0, 120)} ...
                    </div>
                    <div class="card-average">
                        ${film.vote_average}
                    </div>
                </div>`

                container.innerHTML += card
            
        })
        })
     })

}

render()


function render() {
 
    var container = document.getElementById('container')
    var url = 'https://api.themoviedb.org/3/trending/all/week?api_key=bb756895ab61d18b38722b3dc1e66185'
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
     
        data.results.forEach((movie) => {
            if(movie.media_type !== 'tv') {
                
                let image = "https://image.tmdb.org/t/p/original/" + movie.poster_path

                let card = `<div class="card">
                    <div class="card-image" 
                    style="background-image: url('${image}');"></div>
                    <div class="card-title">
                        ${movie.title}
                    </div>
                    <div class="card-description">
                        ${movie.overview.slice(0, 120)} ...
                    </div>
                    <div class="card-average">
                        ${movie.vote_average}
                    </div>
                </div>`

                container.innerHTML += card
            }
        })
     })

}

render()


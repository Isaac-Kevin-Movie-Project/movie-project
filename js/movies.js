(function () {


    $("#addBtn").click(function () {
            console.log('hello')
            const newMovie = {
                title: $("#titleInput").val(),
                rating: $("#ratingInput").val(),
            }
            const url = 'https://tender-soft-bayberry.glitch.me/movies/';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMovie),
            };
            fetch(url, options)
                .then(response => console.log(response)) /* review was created successfully */
                .catch(error => console.error(error)); /* handle errors */
    })



    fetch('https://tender-soft-bayberry.glitch.me/movies/')
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            document.getElementById("movies").innerHTML = renderMovies(data);

        })



    function renderMovies(data) {
        let html = ''
        for (let i = 0; i < data.length; i++) {
            html += '<ul>';
            html += '<li>Title: ' + data[i].title + '</li>';
            html += '<li>Rating: ' + data[i].rating + '</li>';
            html += '</ul>';
        }

        return html;

    }


})();
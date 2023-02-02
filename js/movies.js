(function () {


    $("#addBtn").click(function () {

            let newTitle = $("#titleInput").val()
            let newRating = $("#ratingInput").val()


            const newMovie = {
                title: newTitle,
                rating: newRating
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


    $('btn').click(function (8) {

        function deleteMovie(id) {
            const url = `https://tender-soft-bayberry.glitch.me/movies/${id}`;
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            fetch(url, options)
                .then(response => console.log(response)) /* review was created successfully */
                .catch(error => console.error(error));

         }
    })
    function renderMovies(data) {
        let html = ''
        for (let i = 0; i < data.length; i++) {
            html += '<div class="card">'
            html += '<ul>';
            html += '<li>Title: ' + data[i].title + '</li>';
            html += '<li>Rating: ' + data[i].rating + '</li>';
            html += '</ul>';
            html += `<a href="#" id="${data[i].id}" class="btn btn-primary">Update</a>\n<a href="#" id="${data[i].id}" class="btn btn-danger">Delete</a>\n`
            html += '</div>'
        }

        return html;

    }


})();
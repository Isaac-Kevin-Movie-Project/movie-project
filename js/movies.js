(function () {

    let movies = $("#movies")

    $("#addBtn").click(function () {
        const newMovie = {
            title : $("#titleInput").val(),
            genre : $("#genreInput").val(),
            rating : $("#ratingInput").val(),
            description : $("#descriptionInput").val()
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

        })
})();
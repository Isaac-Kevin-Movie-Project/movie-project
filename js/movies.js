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
            let movieData = data;
            document.getElementById("movies").innerHTML = renderMovies(movieData);
            document.getElementById("moviesListDD").innerHTML = renderMoviesList(movieData);


            $("#moviesList").change(function(movieData){
                let value=$("#moviesList option:selected").attr('data-id');
                $("#exampleFormControlInput1").val(`${data[value-1].title}`);
                $("#exampleFormControlInput2").val(`${data[value-1].rating}`);
            });

            $(`.delete-btn`).click(function () {

                let value=$(this).attr('data-id');

                const url = `https://tender-soft-bayberry.glitch.me/movies/${value}`;
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                fetch(url, options)
                    .then(response => console.log(response)) /* review was created successfully */
                    .catch(error => console.error(error));

            })

            $("#upBtn").click(function () {

                let value=$("#moviesList option:selected").attr('data-id');


                let updatedMovie = {

                    title: $('#exampleFormControlInput1').val(),
                    rating: $('#exampleFormControlInput2').val()
                }


                const url = `https://tender-soft-bayberry.glitch.me/movies/${value}`;
                const options = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(updatedMovie),
                };
                fetch(url, options)
                    .then(response => console.log(response)) /* review was created successfully */
                    .catch(error => console.error(error));


            })
        })


     function renderMovies(data) {
        let html = ''
        for (let i = 0; i < data.length; i++) {
            html += '<div class="card">'
            html += '<ul>';
            html += '<li>Title: ' + data[i].title + '</li>';
            html += '<li>Rating: ' + data[i].rating + '</li>';
            html += '</ul>';
            html += `<a href="#" data-id="${data[i].id}" class="delete-btn btn btn-danger">Delete</a>\n`
            html += '</div>'
        }

        return html;

    }

    function renderMoviesList(data){

        let html = '<select id="moviesList" class="form-select">'
        for (let i = 0; i < data.length; i++) {
            html += `<option value="1" data-id="${data[i].id}">${data[i].title}</option>`;
        }
        html += '</select>'
        


        return html;


    }





})();
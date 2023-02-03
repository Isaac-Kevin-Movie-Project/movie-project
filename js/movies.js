(function () {


    $("#addBtn").click(function () {

            let newTitle = $("#titleInput").val()
            let newGenre = $("#genreInput").val()
            let newRating = $("#ratingInput").val()


            const newMovie = {
                title: newTitle,
                genre: newGenre,
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
                .catch(error => console.error(error)) /* handle errors */
                .finally(function (){
                    $(`#addBtn`).addClass('disabled')
                    setTimeout(function(){
                        window.location.reload();
                    }, 1000);
                })
    })





    fetch('https://tender-soft-bayberry.glitch.me/movies/')
        .then(response => response.json())
        .then(function (data) {
            let movieData = data;
            document.getElementById("movies").innerHTML = renderMovies(movieData);
            document.getElementById("moviesListDD").innerHTML = renderMoviesList(movieData);
            $('#loading').addClass('hidden')

            $('#sortTitle').click(function () {

                movieData = movieData.sort(
                    (p1, p2) => (p1.title > p2.title) ? 1 : (p1.title < p2.title) ? -1 : 0);

                console.log(movieData)

                document.getElementById("movies").innerHTML = renderMovies(movieData);
                document.getElementById("moviesListDD").innerHTML = renderMoviesList(movieData);

                setTimeout(function(){
                }, 1000);

            })

            $("#moviesList").change(function(movieData){
                let value=$("#moviesList option:selected").attr('data-id');
                $("#exampleFormControlInput1").val(`${data[value-1].title}`);
                $("#exampleFormControlInput3").val(`${data[value-1].genre}`);
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
                    .catch(error => console.error(error))
                    .finally(function (){
                        $(`.delete-btn`).addClass('disabled')
                        setTimeout(function(){
                            window.location.reload();
                        }, 1000);
                    })


            })

            $("#upBtn").click(function () {

                let value=$("#moviesList option:selected").attr('data-id');


                let updatedMovie = {

                    title: $('#exampleFormControlInput1').val(),
                    genre: $('#exampleFormControlInput2').val(),
                    rating: $('#exampleFormControlInput3').val()
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
                    .catch(error => console.error(error))
                    .finally(function (){
                        $(`#upBtn`).addClass('disabled')
                        setTimeout(function(){
                            window.location.reload();
                         }, 1000);
                    })


            })
        })


     function renderMovies(data) {
        let html = ''
        for (let i = 0; i < data.length; i++) {
            // html += '<div class="card col-3" style="width: 16rem; height: 10rem;">'
            // html += '<ul>';
            // html += '<li>Title: ' + data[i].title + '</li>';
            // html += '<li>Genre: ' + data[i].genre + '</li>';
            // html += '<li>Rating: ' + data[i].rating + '</li>';
            // html += '</ul>';
            // html += `<a href="#" data-id="${data[i].id}" id="dltBtn" class="delete-btn btn btn-danger mx-auto mt-auto m-3">Delete</a>\n`
            // html += '</div>'

            html += '<div class="container">'
            html += '<div class="card">'
            html += '<div class="box">'
            html += '<div class="content">'
            html += '<h2>' + data[i].id + '</h2>'
            html += '<h3>' + data[i].title + '</h3>'
            html += '<p> Rating: ' + data[i].rating + '</p>'
            html += '<p> Genre: ' + data[i].genre + '</p>'
            html += `<a href="#" data-id="${data[i].id}" id="dltBtn" class="delete-btn btn btn-danger mx-auto mt-auto m-3">Delete</a>\n`
            html += '</div>'
            html += '</div>'
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
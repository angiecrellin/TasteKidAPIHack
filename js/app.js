$(function() {

    $('.search').submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#authorBook').val();
        getRecommends(searchTerm);
        //$('#authorBook').val('')
        $('.search').get(0).reset()


    });
})

var getRecommends = function(searchTerm) {
        var recommends = {
            q: (searchTerm),
            type: 'books',
            k: '233130-AngieCre-H73O8G3C',
            info: 1,
            limit: 10
        };
        /*var url = 'https://www.tastekid.com/api/similar?q={searchTerm}&type={type}&k={k}&info={info}&limit={limit}'
            .replace('{searchTerm}', recommends.q)
            .replace('{type}', recommends.type)
            .replace('{k}', recommends.k)
            .replace('{info}', recommends.info)
            .replace('{limit}', recommends.limit)*/

        var url = 'https://www.tastekid.com/api/similar'

        $.ajax({
            url: url,
            dataType: 'jsonp',
            data: recommends,
            type: 'GET',
            success: function(response) {
                console.log(response)
            },
            error: function(response) {
                console.error(response)


                // showResults(data.items);

            }

        })




        //html not defined
        /*function showResults(results) {
            var html = "";
            $.each(results, function(index, value) {

                html += '<h2>' + value.name + '</h2>';
                html += '<p>' + value.wTeaser + '</p>'
                html += '<a href>' + value.wUrl + '</a>'
            })
        }

        $('#search-results').html(html);

        }*/

        //showSearchResults not defined
        /*.done(function(results) {
        searchResults = showSearchResults(recommends.q, results.items.length);

        $('#search-results').html(searchResults);
        $.each(results.items, function(i, item) {

            var recommends = showUsers(item);
            $('#search-results').append(recommends);
        });
    });*/
}

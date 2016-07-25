$(function() {

    $('#search').submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#authorBook').val();
        getRequest(searchTerm);


    });
})

var getRecommends = function(searchTerm) {
    var recommends = {
        q: searchTerm,
        type: 'books',
        k: '233130-AngieCre-H73O8G3C',
        info: 1,
        limit: 10
    };
    var url = 'https://www.tastekid.com/api/similar?q={searchTerm}+{type}+{k}+{info}+{limit}'
        .replace('{searchTerm}', recommends.searchTerm)
        .replace('{type}', recommends.type)
        .replace('{k}', recommends.k)
        .replace('{info}', recommends.info)
        .replace('{limit}', recommends.limit)

    $.ajax({
        url: url,
        dataType: 'jsonp',
        type: 'GET',

    })
    console.log(data);
    

   
}

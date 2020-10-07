
var searchTerm = "dogs"

//based on searchTerm create a query URL

var queryURLstart = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=2SJ66gVmqttnxa7rA3bmcVBUtPgBI0dT";


    $.ajax({
        url: queryURLstart, 
        method: "GET"})
        .then(function(response) {
            console.log(queryURLstart);

        })
        

        

    


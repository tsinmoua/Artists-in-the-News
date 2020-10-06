
var artistEl = $("#artist");

artistEl = "Bruno Mars";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

searchDiscography(artistEl);

function searchDiscography(artistName) {

var queryURL = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + capitalizeFirstLetter(artistName.split(' ').join('_'));

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(queryURL);

    console.log("Image URL: " + response.artists[0].strArtistThumb);
    $("#discimage").attr("src", response.artists[0].strArtistThumb)

    // name of artist
    console.log("Artist: " + response.artists[0].strArtist);



    queryURL = "https://www.theaudiodb.com/api/v1/json/1/discography.php?s=" + capitalizeFirstLetter(artistName.split(' ').join('%20'));

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        console.log("Name of Album: " + response.album[0].strAlbum);
        console.log("Year Released: " + response.album[0].intYearReleased);

        for (let i = 0; i < response.album.length; i++) {
            console.log(response.album.length);
            var albums = $("<li>");
            albums.html("Name of Album: " + response.album[i].strAlbum + " (" + response.album[i].intYearReleased + ")")
            $("#albums").append(albums);
        }

    });

});

}

var searchTerm = "dogs"

//based on searchTerm create a query URL

var queryURLstart = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=2SJ66gVmqttnxa7rA3bmcVBUtPgBI0dT";


$.ajax({
    url: queryURLstart,
    method: "GET"
})
    .then(function (response) {
        console.log(queryURLstart);

    })


var modal = [
    document.getElementById("myModal1"),
    document.getElementById("myModal2"),
    document.getElementById("myModal3"),
    document.getElementById("myModal4"),
    document.getElementById("myModal5"),
    document.getElementById("myModal6"),
    document.getElementById("myModal7"),
    document.getElementById("myModal8"),
    document.getElementById("myModal9"),
    document.getElementById("myModal10"),
    document.getElementById("myModal11"),
]



// Get the modal
var btns = document.getElementsByClassName("modalbutton")


console.log(btns)

// var btn = document.getElementsByClassName["modalbutton"];


for (let i = 0; i < btns.length; i++) {
    console.log(btns.length);

    btns[i].addEventListener("click", function () {
        console.log(this.value);
        console.log(this.style);
        console.log("myModal" + this.value);
        document.getElementById("myModal" + this.value).style.display = "block";
        
    });
}
// What K came up with
// document.getElementsByClassName("modalbutton")[0].addEventListener("click", function () {
//     document.getElementById("myModal" + this.value).style.display = "block"
// })

// document.getElementsByClassName("close").addEventListener("click", function () {
//     document.getElementById("myModal" + this.getAttribute("data-value")).style.display = "none"
// })

// When the user clicks on <span> (x), close the modal
var close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
  console.log(close.length);
  close[i].addEventListener("click", function () {
      document.getElementById("myModal" + this.getAttribute("data-value")).style.display = "none";
  });
}



// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//   var $modal = $('#modal');

// $.ajax('/url')
//   .done(function(resp){
//     $modal.html(resp).foundation('open');
// });





var artistEl;

// capitalizes
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

if (localStorage.length !== 0) {
    previousArtist = JSON.parse(localStorage.getItem("artistName"));
    console.log(previousArtist);
    searchDiscography(previousArtist);
}

$("#searchbtn").on("click", function (event) {
    event.preventDefault();
    console.log("CLICKED");
    $("#albums").empty();
    $(".nameHeading").empty();
    $("#discimage").attr("src", "");
    $("#discimage").attr("alt", "");
    artistEl = $("#artist");
    console.log(artistEl.val());
    searchDiscography(artistEl.val());
    localStorage.setItem("artistName", JSON.stringify(capitalizeFirstLetter(artistEl.val())));
})


function searchDiscography(artistName) {
    var queryURL = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + capitalizeFirstLetter(artistName.split(' ').join('_'));

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);

        console.log("Image URL: " + response.artists[0].strArtistThumb);
        $("#discimage").attr("src", response.artists[0].strArtistThumb);
        $("#discimage").attr("alt", "Image of " + response.artists[0].strArtist);
        // name of artist
        console.log("Artist: " + response.artists[0].strArtist);
        $(".nameHeading").text(response.artists[0].strArtist);

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

    }).fail(function () {
        alert("Please enter a valid artist name.")
    })

}



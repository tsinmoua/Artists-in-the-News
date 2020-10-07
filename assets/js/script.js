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
        
        
        
        var searchTerm = ""
        //based on searchTerm create a query URL
        
        var queryURLstart = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=2SJ66gVmqttnxa7rA3bmcVBUtPgBI0dT";
        
        
            $.ajax({
                url: queryURLstart, 
                method: "GET"})
                .then(function(response) {
                    console.log(response);
                    console.log(response.response.docs[0].headline.main);
                    console.log(response.response.docs[0].byline.original);
                    console.log(response.response.docs[0].web_url);
                    console.log(response.response.docs[0].pub_date);
                    // $(".article1").text("Article headline: " + response.response.docs[0].headline.main);
                    // $(".article1").append("<p>" + "Article author: " + response.response.docs[0].byline.original + "</p>");
                    // $(".article1").append("<a href=" + response.response.docs[0].web_url + "> " + response.response.docs[0].web_url + "</a>");
                    // $(".article1").append("<p>" + "Date of publication: " + response.response.docs[0].pub_date + "</p>");
                    
                    var article = [$(".article1"), $(".article2"), $(".article3"), $(".article4"), $(".article5"), $(".article6"), $(".article7"), $(".article8"), $(".article9"), $(".article10")]
                    for (let i = 0; i < article.length; i++) {
                        article[i].text("Article headline: " + response.response.docs[i].headline.main);
                        article[i].append("<p>" + "Article author: " + response.response.docs[i].byline.original + "</p>");
                        article[i].append("<a href=" + response.response.docs[i].web_url + "> " + response.response.docs[i].web_url + "</a>");
                        article[i].append("<p>" + "Date of publication: " + response.response.docs[i].pub_date + "</p>");
                        }
        
                });
        
           
        
        //want to display headline of article, URL back to the NYT website, date of publication and author
        //setting those equal to a variable
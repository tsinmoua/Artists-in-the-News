// Get the modal
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

console.log(modal)

var btn = document.getElementsByClassName["modalbutton"];
var span = document.getElementsByClassName("close")[0];

for(let i=0; i<modal.length; i ++){
    modal[i].addEventListener();
}

document.getElementsByClassName("modalbutton").addEventListener("click",function(){
  document.getElementById("myModal" + this.value).style.display="block"
})

document.getElementsByClassName("close").addEventListener("click",function(){
  document.getElementById("myModal" + this.getAttribute("data-value")).style.display="none"
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//   var $modal = $('#modal');

// $.ajax('/url')
//   .done(function(resp){
//     $modal.html(resp).foundation('open');
// });





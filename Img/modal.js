document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("pinch-zoom-image-id");

    //set tap param
    var Tap = new Hammer.Tap({
      taps: 1
    });

    //get all the img elements
    const myNodelist = document.querySelectorAll("img");
    
    // loop through img elements and assign hammer tap to each
    for (let i = 0; i < myNodelist.length; i++) {
      manager = new Hammer.Manager(myNodelist[i])
      manager.add(Tap);
      manager.on('tap', openModal);
    }

    // put this in the hammer.js file to clear the hammer object on close
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }

    function openModal(e){
        modal.style.display = "block";
        modalImg.src = e.target.src;
    }
  
});
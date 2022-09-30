document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("pinch-zoom-image-id");

    //set tap param
    var Tap = new Hammer.Tap({
      taps: 1
    });


    const myNodelist = document.querySelectorAll("img");
    
    for (let i = 0; i < myNodelist.length; i++) {
      manager = new Hammer.Manager(myNodelist[i])
      manager.add(Tap);
      manager.on('tap', openModal);
    }


    // var img1 = document.getElementById("myImg01");
    // var img2 = document.getElementById("myImg02");
    // var img3 = document.getElementById("myImg03");

    //   tapOpen( new Hammer.Manager(img1));
    //   tapOpen( new Hammer.Manager(img2));
    //   tapOpen( new Hammer.Manager(img3));


    // function tapOpen(manager){
    //   manager.add(Tap);
    //   manager.on('tap', openModal);
    // }

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
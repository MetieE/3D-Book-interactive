

document.addEventListener('DOMContentLoaded', function() {
        
    
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img1 = document.getElementById("myImg01");
        var img2 = document.getElementById("myImg02");
        var img3 = document.getElementById("myImg03");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        var manager1 = new Hammer.Manager(img1);
        var manager2 = new Hammer.Manager(img2);
        var manager3 = new Hammer.Manager(img3);
        
        var Tap = new Hammer.Tap({
            taps: 1
          });
          
          manager1.add(Tap); 
          manager2.add(Tap); 
          manager3.add(Tap); 

        manager1.on('tap', function(e){
            modal.style.display = "block";
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt;
        });

        manager2.on('tap', function(e){
            modal.style.display = "block";
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt;
        });

        manager3.on('tap', function(e){
            modal.style.display = "block";
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt;
        });
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }


    document.querySelector(".container").classList.remove("hidden");

    const pageFlip = new St.PageFlip(
        document.getElementById("demoBookExample"),
        {
            width: 610, // base page width
            height: 500, // base page height

            size: "fixed",
            // set threshold values:
            // minWidth: 315,
            // maxWidth: 1000,
            // minHeight: 420,
            // maxHeight: 1350,
            disableFlipByClick: true,
            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: true,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );


    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    document.querySelector(
        ".page-orientation"
    ).innerText = pageFlip.getOrientation();

    document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });

    // triggered by page turning
    pageFlip.on("flip", (e) => {
        document.querySelector(".page-current").innerText = e.data + 1;
    });

    // triggered when the state of the book changes
    pageFlip.on("changeState", (e) => {
        document.querySelector(".page-state").innerText = e.data;
    });

    // triggered when page orientation changes
    pageFlip.on("changeOrientation", (e) => {
        document.querySelector(".page-orientation").innerText = e.data;
    });

    // home button function
    const home = document.querySelector("#home-btn")

    // Event Listener
    home.addEventListener("click", function (){
        while(document.querySelector(".page-current").innerText > 1){
        pageFlip.flipPrev();
        }
    });


});




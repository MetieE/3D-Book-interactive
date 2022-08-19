 
    
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


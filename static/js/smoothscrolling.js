$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          if (!this.classList.contains("navSlide")) {
              // Vertical smooth scroll
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 800, function() {
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              });
          } else if (this.classList.contains("nxtSlide") || this.classList.contains("bakSlide")) {
              // Horizontal smooth scroll
              var exposeList = $(hash);
              var childWidth = exposeList.children().first().width();

              if (this.classList.contains("nxtSlide")) {
                  exposeList.animate({
                      scrollLeft: exposeList.scrollLeft() + childWidth
                  }, 800);
              } else if (this.classList.contains("bakSlide")) {
                  exposeList.animate({
                      scrollLeft: exposeList.scrollLeft() - childWidth
                  }, 800);
              }
          }
      } // End if
  });
});

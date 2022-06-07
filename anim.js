const ethereumButton = document.querySelector('.enableEthereumButton');
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
  window.ethereum.request({ method: 'eth_requestAccounts' });
});

function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
      console.log('ok');
    });
  }
  toggleMenu();

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });


      // Change The Picture and Associated Element Color when Color Options Are Clicked.
      $(".product-colors span").click(function() {
          $(".product-colors span").removeClass("active");
          $(this).addClass("active");
          $(".active").css("border-color", $(this).attr("data-color-sec"))
          $("body").css("background", $(this).attr("data-color-primary"));
          $(".content h2").css("color", $(this).attr("data-color-sec"));
          $(".content h3").css("color", $(this).attr("data-color-sec"));
          $(".container .imgBx").css("background", $(this).attr("data-color-sec"));
          $(".container .details button").css("background", $(this).attr("data-color-sec"));
          $(".imgBx img").attr('src', $(this).attr("data-pic"));
      });

      //FAQ (accordeon)
      function toggleIcon(e) {
              $(e.target)
                  .prev('.panel-heading')
                  .find(".more-less")
                  .toggleClass('glyphicon-plus glyphicon-minus');
          }
          $('.panel-group').on('hidden.bs.collapse', toggleIcon);
          $('.panel-group').on('shown.bs.collapse', toggleIcon);

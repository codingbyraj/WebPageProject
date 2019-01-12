



// header slider


// $('#header-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav: true,
//     dots: false,
//     pagination: true,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:2,
//             nav:true,
//             loop:false,
//         }
//     }
// })

function change(){
    document.getElementById("im-close").style.display = "none";
    document.getElementById("im-opn").style.display = "block";
}

function changeBtn(){
    document.getElementById("close").style.display = "none";
    document.getElementById("opn").style.display = "block";
}


function changeBtn2(){
    document.getElementById("close1").style.display = "none";
    document.getElementById("opn1").style.display = "block";
}
// wow.js

    new WOW().init();


// finish wow.js


function openNav() {
   document.getElementById("mySidenav").style.width = "100%";
    // document.getElementById("mysidenav").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mysidenav").style.display = "none";
}
// $("#mob-menu-icon").click(function(){
//     alert(1);
//     $('#mysidenav').show();
//   });



$(function() {
    $("#mySlider1").AnimatedSlider( { prevButton: "#btn_prev", 
                                     nextButton: "#btn_next",
                                     visibleItems: 3,
                                     infiniteScroll: true,
                                     willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
                                     changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
                                  });
                                });


                                


                                // 